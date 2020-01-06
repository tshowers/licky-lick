import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Store, ShoppingCart, User, Product } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { SHOPPING_CARTS } from 'licky-services';


@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  data$: Observable<any[]>;

  private _products: Product[];

  private _productsOriginal;

  pageSize = 5;

  private _shoppingCart: ShoppingCart;

  private _searchArgumentSubscription: Subscription;

  private _userSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  totalRecords = 0;
  deletedStores: number = 0;
  sharedStores: number = 0;
  draftStores: number = 0;
  uploadStores: number = 0;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
    .subscribe((data: { shoppingCart: ShoppingCart}) => {
      this._shoppingCart = data.shoppingCart;
      this.setBreadCrumb();

    })
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/stores/dashboard", active: false },
      { name: "stores", link: "/application/stores", active: false },
      { name: "shopping cart", link: "/application/shopping-carts", active: true },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit(data): void {
  }

  onDelete(data): void {
  }

  onDetail(data): void {
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'stores'], {queryParams: { searchArgument: value}})
  }


}
