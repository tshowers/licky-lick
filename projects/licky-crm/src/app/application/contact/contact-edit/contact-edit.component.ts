import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Upload, Contact, Company, Dependent,Dropdown } from 'lick-data';
import { DropdownService, TypeFindService, FirebaseDataService, CONTACTS } from 'licky-services';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact: Contact = new Contact();

  prefixes: Dropdown[];

  status: Dropdown[];

  genders: Dropdown[];

  relationships: Dropdown[];

  dependent: Dependent = new Dependent();

  contact_id;

  @ViewChild('dataForm') private frm: NgForm;

  @ViewChild('t') ngbTabSet;

  selectedFiles: FileList;

  currentUpload: Upload;

  constructor(public router: Router, public typeFindService: TypeFindService) { }

  ngOnInit() {
  }

}
