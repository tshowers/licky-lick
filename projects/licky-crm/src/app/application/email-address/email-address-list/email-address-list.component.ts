import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { EmailAddress, Contact } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { EMAIL_ADDRESSES } from 'licky-services';

@Component({
  selector: 'app-email-address-list',
  templateUrl: './email-address-list.component.html',
  styleUrls: ['./email-address-list.component.css']
})
export class EmailAddressListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  data$: Observable<any[]>;

  private _emailAddresses: EmailAddress[];

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _emailAddressSubscription: Subscription;

  private _paramSubscription: Subscription;

  contact_id;

  contact: Contact;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setContactContext();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._searchArgumentSubscription)
      this._searchArgumentSubscription.unsubscribe();
    if (this._emailAddressSubscription)
      this._emailAddressSubscription.unsubscribe();
  }

  private setContactContext(): void {
    if (this._route.snapshot.params['id']) {
      this.contact_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.contact_id = this._route.snapshot.params['id'];
        });
      this.setContact();
      this.setEmailAddresses();
    }
  }

  private setContact(): void {
    this.dm.doContact(this.contact_id);
    this.dm.contact.subscribe((contact) => {
      this.contact = contact;
      this.setBreadCrumb();
    })
  }

  private setEmailAddresses(): void {
    this.dm.doEmailAddresses(this.contact_id);
    this._emailAddressSubscription = this.dm.emailAddresses.subscribe((emailAddresses: EmailAddress[]) => {
      if (emailAddresses) {
        this.totalRecords = emailAddresses.length;
        this._emailAddresses = emailAddresses;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "email address", link: "/application/contacts/" + this.contact_id + "/email-addresses", active: true },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/email-addresses/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'email-addresses', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let emailAddresses = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._emailAddresses);
      observer.next(emailAddresses);
      observer.complete();
    })
  }

  onDetail(data): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'email-addresses',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'email-addresses', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(EMAIL_ADDRESSES + '/' + this.contact_id, data.id, data);
    this.router.navigate(['application', 'contacts', this.contact_id, 'email-addresses',  data.id])
  }

  get diagnostic() {
    return "contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
