import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product, Store, Catalog } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { PRODUCTS } from 'licky-services';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  product: Product;

  canEdit = true;

  canDelete = true;

  searchArgument;

  private _paramSubscription: Subscription;

  private _storeSubscription: Subscription;

  store_id;

  store: Store;

  catalog_id;

  catalog: Catalog;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2,
    public router: Router,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { product: Product }) => {
        this.product = data.product;
        this.store_id = this.product.store_id
        this.setCatalogContext();
        this.searchArgument = this.product.name;
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
      { name: this.catalog.name, link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id, active: false },
      { name: "products", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/products", active: false },
      { name: this.product.name, link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/products/" + this.product.id, active: true },
      { name: "new", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/products/new", active: false },
    ]
  }

  private setCatalogContext(): void {
    if (this._route.snapshot.params['id2']) {
      this.catalog_id = this._route.snapshot.params['id2'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.catalog_id = this._route.snapshot.params['id2'];
        });
      this.setStore();
      this.setCatalog();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
    })
  }

  private setCatalog(): void {
    this.dm.doCatalog(this.store_id, this.catalog_id);
    this.dm.store.subscribe((catalog) => {
      this.catalog = catalog;
      this.setBreadCrumb();
    })
  }



  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products', this.product.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.product.deleted = true;
    this.dm.db.updateData(PRODUCTS, this.product.id, this.product);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.product, null, 2)
  }

}
