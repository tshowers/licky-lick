import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Upload, Contact, Dependent,Dropdown } from 'lick-data';
import { NewsService, UploadService, DropdownService, TypeFindService, FirebaseDataService, LickyLoginService, CONTACTS } from 'licky-services';
import { LickAppPageComponent } from 'lick-app-page';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  contact: Contact = new Contact();

  prefixes: Dropdown[];

  status: Dropdown[];

  genders: Dropdown[];

  relationships: Dropdown[];

  dependent: Dependent = new Dependent();

  @ViewChild('dataForm') private frm: NgForm;

  @ViewChild('t') ngbTabSet;

  selectedFiles: FileList;

  currentUpload: Upload;

  searchArgument;

  constructor(public newsService: NewsService, public loginService: LickyLoginService, protected renderer2: Renderer2, public db: FirebaseDataService, public router: Router, public typeFindService: TypeFindService, private _uploadService: UploadService, private _dropdownService: DropdownService, private _route: ActivatedRoute) {
    super(router, loginService, db, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.initializeDropdowns();
    this.setBreadCrumb();
    this._route.data
      .subscribe((data: { contact: Contact }) => {
        if (data.contact) {
          this.contact = data.contact;
          if (this.contact.isCompany && this.contact.company)
            this.searchArgument = this.contact.company.name;
        }
      });
  }

  setBreadCrumb() : void {
    this.crumbs = [
      { name: "home", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: "edit", link: "/application/contacts/new", active: true },
    ]
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  onSubmit(): void {
    this.modelCheck();
    (this.contact.id ? this.onUpdate() : this.saveNewContact());
    this.redirect();
  }

  redirect(): void {
    if (!this.currentUpload)
      this.router.navigate(['/application/contacts/' + this.contact.id]);
    else {
      let uploadCheck = setInterval(() => {
        if (this.currentUpload.progress >= 100) {
          clearInterval(uploadCheck);
          this.router.navigate(['/application/contacts/' + this.contact.id]);
        }
      }, 1000)
    }
  }

  uploadSingle() {
    if (this.selectedFiles) {
      let file = this.selectedFiles.item(0)
      if (file) {
        this.currentUpload = new Upload(file);
        this.currentUpload.contact_id = this.contact.id;
        // console.log("CALLING UPLOAD SERVICE WITH", this.currentUpload.contact_id, this.contact);
        this._uploadService.pushFileToStorage(this.currentUpload, CONTACTS, '/application/contacts/' + this.contact.id,  this.contact, this.db);
      }
    }
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  onUpdate(): void {
    this.db.updateData(CONTACTS, this.contact.id, this.contact);
    this.uploadSingle();
  }

  saveNewContact(): void {
    this.db.writeData(CONTACTS, this.contact).subscribe((key) => {
      this.contact.id = key;
      console.log("CONTACT AFTER SAVE", this.contact, key)
      this.uploadSingle();
    });
  }

  onBrandNew(): void {
    this.contact = new Contact();
  }

  onDelete(): void {
    this.contact.deleted = true;
    this.onUpdate();
    // this.changeSuccessMessage("Contact deleted successfully at ", 'success');
    this.onBrandNew();
  }

  initializeDropdowns(): void {
    this.genders = this._dropdownService.getGenders();
    this.prefixes = this._dropdownService.getPrefixes();
    this.status = this._dropdownService.getStatus();
    this.relationships = this._dropdownService.getRelationships();
  }
  newDependent(): void {
    this.contact.dependents.push(this.dependent);
    this.dependent = new Dependent();
  }

  editDependent(at: number): void {
    this.dependent = this.contact.dependents[at];
    this.removeDependent(at);
  }

  removeDependent(at: number): void {
    this.contact.dependents.splice(at, 1);
  }

  modelCheck() {
    if (this.dependent.firstName)
      this.newDependent();
  }

  onBreadCrumb(link) : void {
      this.router.navigate([link]);
  }

  onSearch(value) : void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'contacts'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return JSON.stringify(this.contact, null, 2)
  }

}
