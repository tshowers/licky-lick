import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FOP, Contact } from 'lick-data';
import { FOPS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-fop-view',
  templateUrl: './fop-view.component.html',
  styleUrls: ['./fop-view.component.css']
})
export class FopViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  fop: FOP;

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
      .subscribe((data: { fop: FOP }) => {
        this.fop = data.fop;
        this.obfuscate();
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
      { name: "form of payments", link: "/application/contacts/" + this.contact_id + "/form-of-payments", active: false },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/form-of-payments/new", active: false },
    ]
  }

  private obfuscate(): void {
    if (this.fop) {
      if (this.fop.bankAccountNumber)
        this.fop.bankAccountNumber = "*******" + this.fop.bankAccountNumber.slice(this.fop.bankAccountNumber.length - 4);
      if (this.fop.ccNumber)
        this.fop.ccNumber = "************" + this.fop.ccNumber.slice(this.fop.ccNumber.length - 4);
    }
  }

  onEdit(): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'form-of-payments', this.fop.id, 'edit']);
  }

  onDelete(): void {
    this.fop.deleted = true;
    this.dm.db.updateData(FOPS + "/" + this.contact_id, this.fop.id, this.fop);
    this.router.navigate(['application', 'contacts', this.contact_id, 'form-of-payments']);
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
    return JSON.stringify(this.fop, null, 2)
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
