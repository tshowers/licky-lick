import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Upload, Contact, Dependent,Dropdown } from 'lick-data';
import { UploadService, DropdownService, TypeFindService, FirebaseDataService, CONTACTS } from 'licky-services';
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

  @ViewChild('tabContent') tabs;

  selectedFiles: FileList;

  currentUpload: Upload;

  constructor(protected renderer2: Renderer2, public db: FirebaseDataService, public router: Router, public typeFindService: TypeFindService, private _uploadService: UploadService, private _dropdownService: DropdownService, private _route: ActivatedRoute) {
    super(renderer2);
  }

  ngOnInit() {
    this._route.data
      .subscribe((data: { contact: Contact }) => {
        if (data.contact) {
          this.contact = data.contact;
        }
      });
  }

  ngOnDestroy() {

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
        this._uploadService.pushContact(this.currentUpload, this.contact);
      }
    }
  }

  onUpdate(): void {
    this.db.updateData(CONTACTS, this.contact, this.contact.id);
    this.uploadSingle();
  }

  saveNewContact(): void {
    this.db.writeData(CONTACTS, this.contact);
    console.log("contacts after updating:", this.contact)
    this.uploadSingle();
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

}
