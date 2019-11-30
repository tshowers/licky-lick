import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ProductBundle, Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { PRODUCT_BUNDLES } from 'licky-services';

@Component({
  selector: 'app-product-bundle-list',
  templateUrl: './product-bundle-list.component.html',
  styleUrls: ['./product-bundle-list.component.css']
})
export class ProductBundleListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  store_id;

  store: Store;

  data$: Observable<any[]>;

  private _productBundles: ProductBundle[];

  private _productBundlesOriginal;

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _productBundleSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  deletedProductBundles: number = 0;
  sharedProductBundles: number = 0;
  draftProductBundles: number = 0;
  uploadProductBundles: number = 0;

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
    if (this._productBundleSubscription)
      this._productBundleSubscription.unsubscribe();
  }

  private setStoreContext(): void {
    if (this._route.snapshot.params['id']) {
      this.store_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.store_id = this._route.snapshot.params['id'];
        });
      this.setStore();
      this.setProductBundles();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
      this.setBreadCrumb();
    })
  }


  private doDataMassage(productBundles: ProductBundle[]): void {
    this.data$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._productBundles));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, productBundles));

      observer.complete();
    })

  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._productBundles = this._productBundlesOriginal.filter(
        (productBundle) => {
          return ((productBundle.name && (productBundle.name.toLowerCase().indexOf(this.searchArgument) >= 0)) )
        });
    else
      this._productBundles = this._productBundlesOriginal;
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

  private setCounts(productBundles: ProductBundle[]): void {
    this.dm.sortHelper.sortByName(productBundles);
    this._productBundles = productBundles;
    this._productBundlesOriginal = productBundles;
    this.totalRecords = productBundles.length;
    this.deletedProductBundles = productBundles.filter((productBundle) => productBundle.deleted).length;
    this.sharedProductBundles = productBundles.filter((productBundle) => productBundle.shared).length;
    this.draftProductBundles = productBundles.filter((productBundle) => productBundle.draft).length;
    this.uploadProductBundles = productBundles.filter((productBundle) => (productBundle && productBundle.url)).length;
  }

  private setProductBundles(): void {
    this.dm.doStores();
    this._productBundleSubscription = this.dm.productBundles.subscribe((productBundles: ProductBundle[]) => {
      if (productBundles) {
        this.totalRecords = productBundles.length;
        this.setCounts(productBundles);
        this.doDataMassage(productBundles);
        this._productBundles = productBundles;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: false },
      { name: "productBundles", link: "/application/stores/" + this.store_id + "/product-bundles", active: true },
      { name: "new", link: "/application/product-bundle/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'productBundles', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let productBundles = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._productBundles);
      observer.next(productBundles);
      observer.complete();
    })
  }

  onDetail(data): void {
    console.log(JSON.stringify(data))
    this.router.navigate(['application', 'productBundles',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'productBundles', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(PRODUCT_BUNDLES, data.id, data);
    this.router.navigate(['application', 'productBundles',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'productBundles'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "ProductBundles=" + JSON.stringify( this._productBundles);
  }

}
