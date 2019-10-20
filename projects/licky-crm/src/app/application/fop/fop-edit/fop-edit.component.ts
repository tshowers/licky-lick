import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FOP, Contact, Dropdown } from 'lick-data';
import { DropdownService, TypeFindService, FOPS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-fop-edit',
  templateUrl: './fop-edit.component.html',
  styleUrls: ['./fop-edit.component.css']
})
export class FopEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  fop: FOP = new FOP();

  fopTypes: Dropdown[];

  states: Dropdown[];

  ccTypes: Dropdown[];

  private _paramSubscription: Subscription;

  private _fopSubscription: Subscription;

  private _contactSubscription: Subscription;

  contact_id;

  contact: Contact;

  creditCard = false;

  bankAccount = false;

  payPal = false;

  check = false;

  cash = false;


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
      .subscribe((data: { fop: FOP }) => {
        if (data.fop) {
          this.fop = data.fop;
          this.contact_id = this.fop.contact_id
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
    if (this._fopSubscription)
      this._fopSubscription.unsubscribe();
  }

  onSubmit(): void {
    (this.fop.id ? this.onUpdate() : this.saveNewFOP());
    this.router.navigate(['application', 'contacts', this.contact_id, 'form-of-payments']);
  }

  onUpdate(): void {
    this.dm.db.updateData(FOPS + "/" + this.contact_id, this.fop.id, this.fop);
  }

  onDelete(): void {
    this.fop.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewFOP(): void {
    this.dm.db.writeData(FOPS + "/" + this.contact_id, this.fop).subscribe((key) => {
      this.fop.id = key;
    });
  }

  onBrandNew(): void {
    this.fop = new FOP();
  }


  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "form of payment", link: "/application/contacts/" + this.contact_id + "/form-of-payments", active: false },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/form-of-payments/new", active: true },
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
    this.fopTypes = this._dropdownService.getFOPTypes();
    this.states = this._dropdownService.getStates();
    this.ccTypes = this._dropdownService.getCreditCardTypes();
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onFOPChange(): void {
    this.resetFOP();
    if (this.fop.fopType == 'Check') {
      this.check = true;
      this.bankAccount = true;
    }
    else if (this.fop.fopType == 'Cash')
      this.cash = true;
    else if (this.fop.fopType == 'Charge')
      this.creditCard = true;
    else if (this.fop.fopType == 'Transfer')
      this.bankAccount = true;
    else if (this.fop.fopType == 'Paypal')
      this.payPal = true;
  }

  private resetFOP(): void {
    this.creditCard = false;
    this.bankAccount = false;
    this.payPal = false;
    this.check = false;
    this.cash = false;
  }

  get diagnostic() {
    return JSON.stringify(this.fop, null, 2)
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
