import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PhoneNumber, Contact, Dropdown } from 'lick-data';
import { DropdownService, TypeFindService, PHONE_NUMBERS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-phone-number-edit',
  templateUrl: './phone-number-edit.component.html',
  styleUrls: ['./phone-number-edit.component.css']
})
export class PhoneNumberEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  phoneNumber: PhoneNumber = new PhoneNumber();

  phoneNumberTypes: Dropdown[];

  private _paramSubscription: Subscription;

  private _phoneNumberSubscription: Subscription;

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
      .subscribe((data: { phoneNumber: PhoneNumber }) => {
        if (data.phoneNumber) {
          this.phoneNumber = data.phoneNumber;
          this.contact_id = this.phoneNumber.contact_id
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
    if (this._phoneNumberSubscription)
      this._phoneNumberSubscription.unsubscribe();
  }

  onSubmit(): void {
    (this.phoneNumber.id ? this.onUpdate() : this.saveNewEmailAddress());
    this.router.navigate(['application', 'contacts', this.contact_id, 'phone-numbers']);
  }

  onUpdate(): void {
    this.dm.db.updateData(PHONE_NUMBERS + "/" + this.contact_id, this.phoneNumber.id, this.phoneNumber);
  }

  onDelete(): void {
    this.phoneNumber.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewEmailAddress(): void {
    this.dm.db.writeData(PHONE_NUMBERS + "/" + this.contact_id, this.phoneNumber).subscribe((key) => {
      this.phoneNumber.id = key;
    });
  }

  onBrandNew(): void {
    this.phoneNumber = new PhoneNumber();
  }


  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "email address", link: "/application/contacts/" + this.contact_id + "/phone-numbers", active: false },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/phone-numbers/new", active: true },
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
    this.phoneNumberTypes = this._dropdownService.getEmailTypes();
  }


  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  get diagnostic() {
    return JSON.stringify(this.phoneNumber, null, 2)
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
