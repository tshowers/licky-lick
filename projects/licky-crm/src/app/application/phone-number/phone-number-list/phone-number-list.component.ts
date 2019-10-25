import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { PhoneNumber, Contact } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { PHONE_NUMBERS } from 'licky-services';


@Component({
  selector: 'app-phone-number-list',
  templateUrl: './phone-number-list.component.html',
  styleUrls: ['./phone-number-list.component.css']
})
export class PhoneNumberListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  data$: Observable<any[]>;

  private _phoneNumbers: PhoneNumber[];

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _phoneNumberSubscription: Subscription;

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
    if (this._phoneNumberSubscription)
      this._phoneNumberSubscription.unsubscribe();
  }

  private setContactContext(): void {
    if (this._route.snapshot.params['id']) {
      this.contact_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.contact_id = this._route.snapshot.params['id'];
        });
      this.setContact();
      this.setPhoneNumbers();
    }
  }

  private setContact(): void {
    this.dm.doContact(this.contact_id);
    this.dm.contact.subscribe((contact) => {
      this.contact = contact;
      this.setBreadCrumb();
    })
  }

  private setPhoneNumbers(): void {
    this.dm.doPhoneNumbers(this.contact_id);
    this._phoneNumberSubscription = this.dm.phoneNumbers.subscribe((phoneNumbers: PhoneNumber[]) => {
      if (phoneNumbers) {
        this.totalRecords = phoneNumbers.length;
        this._phoneNumbers = phoneNumbers;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "phone number", link: "/application/contacts/" + this.contact_id + "/phone-numbers", active: true },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/phone-numbers/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'phone-numbers', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let phoneNumbers = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._phoneNumbers);
      observer.next(phoneNumbers);
      observer.complete();
    })
  }

  onDetail(data): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'phone-numbers',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'phone-numbers', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(PHONE_NUMBERS + '/' + this.contact_id, data.id, data);
    this.router.navigate(['application', 'contacts', this.contact_id, 'phone-numbers',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'contacts'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
