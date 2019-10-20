import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmailAddress, Contact, Dropdown } from 'lick-data';
import { DropdownService, TypeFindService, EMAIL_ADDRESSES } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-email-emailAddress-edit',
  templateUrl: './email-address-edit.component.html',
  styleUrls: ['./email-address-edit.component.css']
})
export class EmailAddressEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  emailAddress: EmailAddress = new EmailAddress();

  emailTypes: Dropdown[];

  private _paramSubscription: Subscription;

  private _emailAddressSubscription: Subscription;

  private _contactSubscription: Subscription;

  contact_id;

  contact: Contact;



  constructor(public dm: DataMediationService,
    protected renderer2: Renderer2,
    public router: Router,
    public typeFindService: TypeFindService,
    private _dropdownService: DropdownService,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.initializeDropdowns();
    this._route.data
      .subscribe((data: { emailAddress: EmailAddress }) => {
        if (data.emailAddress) {
          this.emailAddress = data.emailAddress;
          this.contact_id = this.emailAddress.contact_id
          this.setContactContext();
        }
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._contactSubscription)
      this._contactSubscription.unsubscribe();
    if (this._emailAddressSubscription)
      this._emailAddressSubscription.unsubscribe();
  }

  onSubmit(): void {
    (this.emailAddress.id ? this.onUpdate() : this.saveNewEmailAddress());
    this.router.navigate(['application', 'contacts', this.contact_id, 'email-addresses']);
  }

  onUpdate(): void {
    this.dm.db.updateData(EMAIL_ADDRESSES + "/" + this.contact_id, this.emailAddress.id, this.emailAddress);
  }

  onDelete(): void {
    this.emailAddress.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewEmailAddress(): void {
    this.dm.db.writeData(EMAIL_ADDRESSES + "/" + this.contact_id, this.emailAddress).subscribe((key) => {
      this.emailAddress.id = key;
    });
  }

  onBrandNew(): void {
    this.emailAddress = new EmailAddress();
  }


  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "email address", link: "/application/contacts/" + this.contact_id + "/email-addresses", active: false },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/email-addresses/new", active: true },
    ]
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

  private initializeDropdowns(): void {
    this.emailTypes = this._dropdownService.getEmailTypes();
  }


  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  get diagnostic() {
    return JSON.stringify(this.emailAddress, null, 2)
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
