import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Product, Catalog, Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { PRODUCTS } from 'licky-services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  store_id;

  store: Store;

  catalog_id;

  catalog: Catalog;

  data$: Observable<any[]>;

  private _products: Product[];

  private _productsOriginal;

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _productSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';


  deletedProducts: number = 0;
  sharedProducts: number = 0;
  draftProducts: number = 0;
  uploadProducts: number = 0;

  newItemLink = 'application/stores/' + this.store_id + '/catalogs/' + this.catalog_id + '/products/new';

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
    if (this._productSubscription)
      this._productSubscription.unsubscribe();
  }

  private setStoreContext(): void {
    if (this._route.snapshot.params['id']) {
      this.store_id = this._route.snapshot.params['id'];
      this.catalog_id = this._route.snapshot.params['id2'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.store_id = this._route.snapshot.params['id'];
          this.catalog_id = this._route.snapshot.params['id2'];
        });
      this.setStore();
      this.setProducts();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
      this.setCatalog();
    })
  }

  private setCatalog(): void {
    this.dm.doCatalog(this.store_id, this.catalog_id);
    this.dm.catalog.subscribe((catalog) => {
      this.catalog = catalog;
      // console.log("Just before setting setBreadCrumb", JSON.stringify(catalog))
      if (catalog)
      this.setBreadCrumb();
    })
  }


  private doDataMassage(products: Product[]): void {
    this.data$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._products));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, products));

      observer.complete();
    })

  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._products = this._productsOriginal.filter(
        (product) => {
          return ((product.name && (product.name.toLowerCase().indexOf(this.searchArgument) >= 0)) )
        });
    else
      this._products = this._productsOriginal;
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

  private setCounts(products: Product[]): void {
    this.dm.sortHelper.sortByName(products);
    this._products = products;
    this._productsOriginal = products;
    this.totalRecords = products.length;
    this.deletedProducts = products.filter((product) => product.deleted).length;
    this.sharedProducts = products.filter((product) => product.shared).length;
    this.draftProducts = products.filter((product) => product.draft).length;
    this.uploadProducts = products.filter((product) => (product && product.url)).length;
  }

  private setProducts(): void {
    this.dm.doProducts(this.store_id);
    this._productSubscription = this.dm.products.subscribe((products: Product[]) => {
      if (products) {
        this.totalRecords = products.length;
        this.setCounts(products);
        this.doDataMassage(products);
        this._products = products;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: false },
      { name: this.store.name, link: "/application/stores/" + this.store_id, active: false },
      { name: this.catalog.name, link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id, active: false },
      { name: "products", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/products", active: true },
      { name: "new", link: "/application/stores/" + this.store_id + "/products/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let products = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._products);
      observer.next(products);
      observer.complete();
    })
  }

  onDetail(data): void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products', data.id, 'edit'])
  }

  onDelete(data): void {
    this.dm.db.setDeleted(PRODUCTS + "/" + this.store_id, data.id, data);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "Products=" + JSON.stringify( this._products);
  }

}
