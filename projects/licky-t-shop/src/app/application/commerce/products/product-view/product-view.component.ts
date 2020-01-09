import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product, Store, Catalog, ShoppingCart } from 'lick-data';
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

  quantity: number = 1;

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
        this.addToProductViewHistory();
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
    this.dm.catalog.subscribe((catalog) => {
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
    this.dm.db.setDeleted(PRODUCTS + "/" + this.store_id, this.product.id, this.product);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'products'], { queryParams: { searchArgument: value } })
  }

  onAddToCart(): void {
    if (this.dm.user) {
      console.log("USER", JSON.stringify(this.dm.user))
      this.checkShoppingCart();
    } else {
      console.log("NO USER FOUND")
      this.showSignIn()
    }
  }

  private addToProductViewHistory(): void {
    if (this.dm.user && this.dm.user.shoppingCart) {
      console.log("Shopping Cart Found for addToProductViewHistory")
      if (!this.isProductOnTop)
        this.dm.user.shoppingCart.productViewHistory.push(this.product);
    } else {
      console.log("Shopping Cart NOT Found for addToProductViewHistory so create one");
      const shoppingCart = new ShoppingCart();
      this.dm.user.shoppingCart = shoppingCart;
    }
  }

  private isProductOnTop(): boolean {
    const productOnTop = this.dm.user.shoppingCart.productViewHistory.slice(0, 1);

    if (productOnTop) {
      console.log("Checking Product on Top", JSON.stringify(productOnTop), JSON.stringify(this.product))
      return productOnTop[0].id = this.product.id
    }
    return false;
  }

  private showSignIn(): void {
    this.router.navigate(['application', 'login'], { queryParams: { productID: this.product.id, quantity: this.quantity } });
  }

  private checkShoppingCart(): void {
    if (this.dm.user.shoppingCart) {
      console.info("SHOPPING CART FOUND")
      this.checkOrderLine();
    } else {
      console.info("NO SHOPPING CART FOUND")
      const shoppingCart = new ShoppingCart();
      this.dm.user.shoppingCart = shoppingCart;
      this.checkOrderLine();
    }
  }

  private checkOrderLine(): void {
    if (this.dm.user.shoppingCart.orderLine) {
      this.addProductToCart();
    }
    else {
      this.dm.user.shoppingCart.orderLine = [];
      this.addProductToCart();
    }
  }

  private addProductToCart(): void {
    this.dm.user.shoppingCart.orderLine.push({ "quantity": this.quantity, "product": this.product })
    console.info("USER RECORD IS NOW", JSON.stringify(this.dm.user))
  }

  get diagnostic() {
    return JSON.stringify(this.product, null, 2) + " ******** " + JSON.stringify(this.dm.user, null, 2)
  }

}
