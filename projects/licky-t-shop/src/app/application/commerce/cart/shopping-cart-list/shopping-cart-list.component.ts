import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ShoppingCart, Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { SHOPPING_CARTS } from 'licky-services';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  store_id;

  store: Store;

  data$: Observable<any[]>;

  private _shoppingCarts: ShoppingCart[];

  private _shoppingCartsOriginal;

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _shoppingCartSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  deletedShoppingCarts: number = 0;
  sharedShoppingCarts: number = 0;
  draftShoppingCarts: number = 0;
  uploadShoppingCarts: number = 0;

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
    if (this._shoppingCartSubscription)
      this._shoppingCartSubscription.unsubscribe();
  }

  private setStoreContext(): void {
    if (this._route.snapshot.params['id']) {
      this.store_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.store_id = this._route.snapshot.params['id'];
        });
      this.setStore();
      this.setShoppingCarts();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
      this.setBreadCrumb();
    })
  }


  private doDataMassage(shoppingCarts: ShoppingCart[]): void {
    this.data$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._shoppingCarts));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, shoppingCarts));

      observer.complete();
    })

  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._shoppingCarts = this._shoppingCartsOriginal.filter(
        (shoppingCart) => {
          return ((shoppingCart.name && (shoppingCart.name.toLowerCase().indexOf(this.searchArgument) >= 0)) )
        });
    else
      this._shoppingCarts = this._shoppingCartsOriginal;
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

  private setCounts(shoppingCarts: ShoppingCart[]): void {
    this.dm.sortHelper.sortByName(shoppingCarts);
    this._shoppingCarts = shoppingCarts;
    this._shoppingCartsOriginal = shoppingCarts;
    this.totalRecords = shoppingCarts.length;
    this.deletedShoppingCarts = shoppingCarts.filter((shoppingCart) => shoppingCart.deleted).length;
    this.sharedShoppingCarts = shoppingCarts.filter((shoppingCart) => shoppingCart.shared).length;
    this.draftShoppingCarts = shoppingCarts.filter((shoppingCart) => shoppingCart.draft).length;
    this.uploadShoppingCarts = shoppingCarts.filter((shoppingCart) => (shoppingCart && shoppingCart.url)).length;
  }

  private setShoppingCarts(): void {
    this.dm.doStores();
    this._shoppingCartSubscription = this.dm.shoppingCarts.subscribe((shoppingCarts: ShoppingCart[]) => {
      if (shoppingCarts) {
        this.totalRecords = shoppingCarts.length;
        this.setCounts(shoppingCarts);
        this.doDataMassage(shoppingCarts);
        this._shoppingCarts = shoppingCarts;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: false },
      { name: "shoppingCarts", link: "/application/carts", active: true },
      { name: "new", link: "/application/carts/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'shoppingCarts', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let shoppingCarts = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._shoppingCarts);
      observer.next(shoppingCarts);
      observer.complete();
    })
  }

  onDetail(data): void {
    console.log(JSON.stringify(data))
    this.router.navigate(['application', 'shoppingCarts',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'shoppingCarts', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(SHOPPING_CARTS, data.id, data);
    this.router.navigate(['application', 'shoppingCarts',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'shoppingCarts'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "ShoppingCarts=" + JSON.stringify( this._shoppingCarts);
  }

}
