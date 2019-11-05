import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PhoneNumber, Contact } from 'lick-data';
import { PHONE_NUMBERS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-phone-number-view',
  templateUrl: './phone-number-view.component.html',
  styleUrls: ['./phone-number-view.component.css']
})
export class PhoneNumberViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  phoneNumber: PhoneNumber;

  contact: Contact;

  contact_id: string;

  private _paramSubscription: Subscription;

  private _contactSubscription: Subscription;


  constructor(public dm: DataMediationService,
    protected renderer2: Renderer2,
    public router: Router,
    private _route: ActivatedRoute) {
      super(router, renderer2);
    }

  ngOnInit() {
    this._route.data
      .subscribe((data: { phoneNumber: PhoneNumber }) => {
        this.phoneNumber = data.phoneNumber;
        this.setContactContext();
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._contactSubscription)
      this._contactSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "email address", link: "/application/contacts/" + this.contact_id + "/phone-numbers", active: false },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/phone-numbers/new", active: false },
    ]
  }

  onEdit(): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'phone-numbers', this.phoneNumber.id, 'edit']);
  }

  onDelete(): void {
    this.phoneNumber.deleted = true;
    this.dm.db.updateData(PHONE_NUMBERS + "/" + this.contact_id, this.phoneNumber.id, this.phoneNumber);
    this.router.navigate(['application', 'contacts', this.contact_id, 'phone-numbers']);
  }


  private setContactContext(): void {
    if (this._route.snapshot.params['id']) {
      this.contact_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.contact_id = this._route.snapshot.params['id'];
        });
      this.setContact();
    }
  }

  private setContact(): void {
    this.dm.doContact(this.contact_id);
    this.dm.contact.subscribe((contact) => {
      this.contact = contact;
      this.setBreadCrumb();
    })
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'contacts'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return JSON.stringify(this.phoneNumber, null, 2)
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
