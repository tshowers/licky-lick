import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductBundle, Store, Catalog } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { PRODUCT_BUNDLES } from 'licky-services';
import { DataMediationService } from '../../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-bundle-view',
  templateUrl: './product-bundle-view.component.html',
  styleUrls: ['./product-bundle-view.component.css']
})
export class ProductBundleViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  productBundle: ProductBundle;

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
      .subscribe((data: { productBundle: ProductBundle }) => {
        this.productBundle = data.productBundle;
        this.store_id = this.productBundle.store_id
        this.setCatalogContext();
        this.searchArgument = this.productBundle.name;
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
      { name: "product bundles", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/product-bundles", active: false },
      { name: this.productBundle.name, link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/product-bundles/" + this.productBundle.id, active: true },
      { name: "new", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/product-bundles/new", active: false },
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
    this.dm.doCatalog(this.catalog_id);
    this.dm.store.subscribe((catalog) => {
      this.catalog = catalog;
      this.setBreadCrumb();
    })
  }



  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'product-bundles', this.productBundle.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.productBundle.deleted = true;
    this.dm.db.updateData(PRODUCT_BUNDLES, this.productBundle.id, this.productBundle);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'product-bundles']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'product-bundles'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.productBundle, null, 2)
  }

}
