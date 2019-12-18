import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment, Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { PAYMENTS } from 'licky-services';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.css']
})
export class PaymentViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  payment: Payment;

  canEdit = true;

  canDelete = true;

  searchArgument;

  private _paramSubscription: Subscription;

  private _storeSubscription: Subscription;

  store_id;

  store: Store;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2,
    public router: Router,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { payment: Payment }) => {
        this.payment = data.payment;
        this.store_id = this.payment.store_id
        this.setStore();
        this.searchArgument = this.payment.id;
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: false },
      { name: this.store.name, link: "/application/stores/" + this.store_id, active: false },
      { name: this.payment.id, link: "/application/stores/" + this.store_id + "/payments/" + this.payment.id, active: false },
      { name: "new", link: "/application/stores/" + this.store_id + "/payments/new", active: false },
    ]
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
    })
  }


  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate(['application', 'stores', this.store_id, 'payments', this.payment.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.payment.deleted = true;
    this.dm.db.updateData(PAYMENTS, this.payment.id, this.payment);
    this.router.navigate(['application', 'stores', this.store_id, 'payments']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'stores', this.store_id, 'payments'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.payment, null, 2)
  }

}
