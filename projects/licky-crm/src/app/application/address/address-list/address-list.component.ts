import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Address, Contact } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  data$: Observable<any[]>;

  private _addresses: Address[];

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _addressSubscription: Subscription;

  private _paramSubscription: Subscription;

  contact_id;

  contact: Contact;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setContactContext();
    this.setContact();
    this.setBreadCrumb();
    this.setAddresses();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._searchArgumentSubscription)
      this._searchArgumentSubscription.unsubscribe();
    if (this._addressSubscription)
      this._addressSubscription.unsubscribe();
  }

  private setContactContext(): void {
    if (this._route.snapshot.params['id']) {
      this.contact_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.contact_id = this._route.snapshot.params['id'];
        });
    }
  }

  private setContact(): void {
    if (this.contact_id) {
      this.dm.doContact(this.contact_id);
      this.dm.contact.subscribe(contact => {
        this.contact = contact;
      })
    }
  }

  private setAddresses(): void {
    if (this.contact_id) {
      this.dm.doAddresses(this.contact_id);
      this._addressSubscription = this.dm.addresses.subscribe((addresses: Address[]) => {
        if (addresses) {
          this.newPage(addresses);
        }
      })
    }
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: "name", link: "/application/contacts/new", active: false },
      { name: "address", link: "/application/contacts", active: true },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/addresses/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  newPage(value): void {
    this.data$ = Observable.create((observer) => {
      observer.next(this.dm.db.getRecordsToDisplay(value, this.pageSize, this._addresses));
      observer.complete();
    })
  }

  get diagnostic() {
    return "contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
