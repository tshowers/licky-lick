import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Order, Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { ORDERS } from 'licky-services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  store_id;

  store: Store;

  data$: Observable<any[]>;

  private _orders: Order[];

  private _ordersOriginal;

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _orderSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  deletedOrders: number = 0;
  sharedOrders: number = 0;
  draftOrders: number = 0;
  uploadOrders: number = 0;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setStoreContext();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._searchArgumentSubscription)
      this._searchArgumentSubscription.unsubscribe();
    if (this._orderSubscription)
      this._orderSubscription.unsubscribe();
  }

  private setStoreContext(): void {
    if (this._route.snapshot.params['id']) {
      this.store_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.store_id = this._route.snapshot.params['id'];
        });
      this.setStore();
      this.setOrders();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
      this.setBreadCrumb();
    })
  }

  private doDataMassage(orders: Order[]): void {
    this.data$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._orders));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, orders));

      observer.complete();
    })

  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._orders = this._ordersOriginal.filter(
        (order) => {
          return ((order.name && (order.name.toLowerCase().indexOf(this.searchArgument) >= 0)) )
        });
    else
      this._orders = this._ordersOriginal;
  }

  private isSearch(): boolean {
    if (this._route.snapshot.queryParams['searchArgument']) {
      this.searchArgument = this._route.snapshot.queryParams['searchArgument'];
      this._searchArgumentSubscription = this._route.queryParams.subscribe(
        (params: Params) => {
          this.searchArgument = this._route.snapshot.queryParams['searchArgument'];
        }
      )
      return true;
    }
    return false;
  }

  private setCounts(orders: Order[]): void {
    this.dm.sortHelper.sortByName(orders);
    this._orders = orders;
    this._ordersOriginal = orders;
    this.totalRecords = orders.length;
    this.deletedOrders = orders.filter((order) => order.deleted).length;
    this.sharedOrders = orders.filter((order) => order.shared).length;
    this.draftOrders = orders.filter((order) => order.draft).length;
    this.uploadOrders = orders.filter((order) => (order && order.url)).length;
  }

  private setOrders(): void {
    this.dm.doStores();
    this._orderSubscription = this.dm.orders.subscribe((orders: Order[]) => {
      if (orders) {
        this.totalRecords = orders.length;
        this.setCounts(orders);
        this.doDataMassage(orders);
        this._orders = orders;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: false },
      { name: "orders", link: "/application/stores/" + this.store_id + "/orders", active: true },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'orders', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let orders = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._orders);
      observer.next(orders);
      observer.complete();
    })
  }

  onDetail(data): void {
    console.log(JSON.stringify(data))
    this.router.navigate(['application', 'orders',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'orders', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(ORDERS, data.id, data);
    this.router.navigate(['application', 'orders',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'orders'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "Orders=" + JSON.stringify( this._orders);
  }

}
