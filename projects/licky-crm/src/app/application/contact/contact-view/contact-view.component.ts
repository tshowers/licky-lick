import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact, Address, EmailAddress, FOP, JustText, PhoneNumber, Project, Opportunity } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { CONTACTS } from 'licky-services';
import { DataMediationService } from '../../../shared/services/data-mediation.service';


@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  contact: Contact;

  $addresses: Observable<Address[]>;

  $emailAddresses: Observable<EmailAddress[]>;

  $fops: Observable<FOP[]>;

  $notes: Observable<JustText[]>;

  $phoneNumbers: Observable<PhoneNumber[]>;

  $projects: Observable<Project[]>;

  $opportunities: Observable<Opportunity[]>;

  canEdit = true;

  canDelete = true;

  searchArgument;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2,
    public router: Router,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { contact: Contact }) => {
        this.contact = data.contact;
        this.setBreadCrumb();
        if (this.contact.isCompany && this.contact.company)
          this.searchArgument = this.contact.company.name;

        if (this.contact && this.contact.ssn)
          this.contact.ssn = "***-**-" + this.contact.ssn.substring(this.contact.ssn.length - 4)
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: true },
      { name: "new", link: "/application/contacts/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate(['application', 'contacts', this.contact.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.contact.deleted = true;
    this.dm.db.updateData(CONTACTS, this.contact.id, this.contact);
    this.router.navigate(['application', 'contacts']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'contacts'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.contact, null, 2)
  }

}
