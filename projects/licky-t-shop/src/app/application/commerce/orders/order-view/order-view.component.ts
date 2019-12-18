import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order, Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { ORDERS } from 'licky-services';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  order: Order;

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
      .subscribe((data: { order: Order }) => {
        this.order = data.order;
        this.store_id = this.order.store_id
        this.setStore();
        this.searchArgument = this.order.name;
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
      { name: this.order.name, link: "/application/stores/" + this.store_id + "/orders/" + this.order.id, active: false },
      { name: "new", link: "/application/stores/" + this.store_id + "/orders/new", active: false },
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
    this.router.navigate(['application', 'stores', this.store_id, 'orders', this.order.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.order.deleted = true;
    this.dm.db.updateData(ORDERS, this.order.id, this.order);
    this.router.navigate(['application', 'stores', this.store_id, 'orders']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'stores', this.store_id, 'stores', this.store_id, 'orders'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.order, null, 2)
  }

}
