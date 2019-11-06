import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Upload, Contact, Dependent,Dropdown } from 'lick-data';
import { UploadService, DropdownService, TypeFindService, CONTACTS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

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

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, public typeFindService: TypeFindService, private _uploadService: UploadService, private _dropdownService: DropdownService, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.initializeDropdowns();
    this._route.data
      .subscribe((data: { contact: Contact }) => {
        if (data.contact) {
          this.contact = data.contact;
          this.setBreadCrumb();
          if (this.contact.isCompany && this.contact.company)
            this.searchArgument = this.contact.company.name;
        }
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb() : void {

    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: (this.contact.id ? (this.contact.firstName + " " + this.contact.lastName) : "edit"), link: "/application/contacts/new", active: true },
    ]
  }

  onBreadCrumb(link) : void {
      this.router.navigate([link]);
  }

  onSubmit(): void {
    this.modelCheck();
    (this.contact.id ? this.onUpdate() : this.saveNewContact());
  }

  private redirect(redirectPath): void {
    if (!this.currentUpload)
    this.router.navigate([redirectPath]);
    else {
      let uploadCheck = setInterval(() => {
        if (this.currentUpload.progress >= 100) {
          clearInterval(uploadCheck);
          this.router.navigate([redirectPath]);
        }
      }, 1000)
    }
  }

  private uploadSingle() {
    if (this.selectedFiles) {
      let file = this.selectedFiles.item(0)
      if (file) {
        this.currentUpload = new Upload(file);
        this.currentUpload.contact_id = this.contact.id;
        this._uploadService.pushFileToStorage(this.currentUpload, CONTACTS, '/application/contacts/' + this.contact.id,  this.contact, this.dm.db);
      }
    }
  }

  private detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  onUpdate(): void {
    this.dm.db.updateData(CONTACTS, this.contact.id, this.contact);
    const redirectPath = '/application/contacts/' + this.contact.id;
    this.uploadSingle();
    this.redirect(redirectPath);
  }

  onDelete(): void {
    this.contact.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewContact(): void {
    this.dm.db.writeData(CONTACTS, this.contact).subscribe((key) => {
      this.contact.id = key;
      const redirectPath = '/application/contacts/' + this.contact.id;
      this.uploadSingle();
      this.redirect(redirectPath);
    });
  }

  onBrandNew(): void {
    this.contact = new Contact();
  }


  private initializeDropdowns(): void {
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

  private modelCheck() {
    if (this.dependent.firstName)
      this.newDependent();
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'contacts'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return JSON.stringify(this.contact, null, 2)
  }

}
