import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Address, Contact } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { ADDRESSES } from 'licky-services';

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
      this.setContact();
      this.setAddresses();
    }
  }

  private setContact(): void {
    this.dm.doContact(this.contact_id);
    this.dm.contact.subscribe((contact) => {
      this.contact = contact;
      // console.log("CONTACT IS", JSON.stringify(this.contact), this.contact_id);
      this.setBreadCrumb();
    })
  }

  private setAddresses(): void {
    this.dm.doAddresses(this.contact_id);
    this._addressSubscription = this.dm.addresses.subscribe((addresses: Address[]) => {
      if (addresses) {
        this.totalRecords = addresses.length;
        this._addresses = addresses;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "address", link: "/application/contacts", active: true },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/addresses/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let addresses = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._addresses);
      observer.next(addresses);
      observer.complete();
    })
  }

  onDetail(data): void {
    console.log("GETTING DETAILS FOR", data.id)
    this.router.navigate(['/application/contacts/' + this.contact_id  + '/addresses/' +  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['/application/contacts/' + this.contact_id + '/addresses/' + data.id + '/edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(ADDRESSES + '/' + this.contact_id, data.id, data);
    this.router.navigate(['application', 'contacts', this.contact_id, 'addresses',  data.id])
  }

  get diagnostic() {
    return "contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
