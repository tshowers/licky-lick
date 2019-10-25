import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmailAddress, Contact } from 'lick-data';
import { EMAIL_ADDRESSES } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-email-address-view',
  templateUrl: './email-address-view.component.html',
  styleUrls: ['./email-address-view.component.css']
})
export class EmailAddressViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  emailAddress: EmailAddress;

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
      .subscribe((data: { emailAddress: EmailAddress }) => {
        this.emailAddress = data.emailAddress;
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
      { name: "email address", link: "/application/contacts/" + this.contact_id + "/email-addresses", active: false },
      { name: "view", link: "/application/contacts/" + this.contact_id + "/email-addresses/" + this.emailAddress.id, active: true },
    ]
  }

  onEdit(): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'email-addresses', this.emailAddress.id]);
  }

  onDelete(): void {
    this.emailAddress.deleted = true;
    this.dm.db.updateData(EMAIL_ADDRESSES + "/" + this.contact_id, this.emailAddress.id, this.emailAddress);
    this.router.navigate(['application', 'contacts', this.contact_id, 'email-addresses']);
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
    return JSON.stringify(this.emailAddress, null, 2)
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
