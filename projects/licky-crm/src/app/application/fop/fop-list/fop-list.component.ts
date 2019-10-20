import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FOP, Contact } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { FOPS } from 'licky-services';

@Component({
  selector: 'app-fop-list',
  templateUrl: './fop-list.component.html',
  styleUrls: ['./fop-list.component.css']
})
export class FopListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  data$: Observable<any[]>;

  private _fops: FOP[];

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _fopSubscription: Subscription;

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
    if (this._fopSubscription)
      this._fopSubscription.unsubscribe();
  }

  private setContactContext(): void {
    if (this._route.snapshot.params['id']) {
      this.contact_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.contact_id = this._route.snapshot.params['id'];
        });
      this.setContact();
      this.setFOPs();
    }
  }

  private setContact(): void {
    this.dm.doContact(this.contact_id);
    this.dm.contact.subscribe((contact) => {
      this.contact = contact;
      this.setBreadCrumb();
    })
  }

  private setFOPs(): void {
    this.dm.doFops(this.contact_id);
    this._fopSubscription = this.dm.fops.subscribe((fops: FOP[]) => {
      if (fops) {
        this.totalRecords = fops.length;
        this._fops = fops;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "form of payment", link: "/application/contacts/" + this.contact_id + "/form-of-payments", active: true },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/form-of-payments/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'form-of-payments', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let fops = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._fops);
      observer.next(fops);
      observer.complete();
    })
  }

  onDetail(data): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'form-of-payments',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'form-of-payments', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(FOPS + '/' + this.contact_id, data.id, data);
    this.router.navigate(['application', 'contacts', this.contact_id, 'form-of-payments',  data.id])
  }

  get diagnostic() {
    return "contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
