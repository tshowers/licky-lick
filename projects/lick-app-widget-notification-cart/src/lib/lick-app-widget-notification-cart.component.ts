import { Component, OnInit, OnDestroy, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart, Product, User } from 'lick-data';
import { SortHelperService, LickyLoginService, FirebaseDataService, SHOPPING_CARTS } from 'licky-services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'licky-lick-app-widget-notification-cart',
  templateUrl: './lick-app-widget-notification-cart.component.html',
  styles: []
})
export class LickAppWidgetNotificationCartComponent implements OnInit, OnDestroy {

  products$: Observable<Product[]>;
  @Input() loginService: LickyLoginService;
  @Input() db: FirebaseDataService;
  @Input() router: Router;
  @Input() cartLink;
  cartChecked: boolean = false;
  public user: User;
  shoppingCart: ShoppingCart;
  notificationSubscription: Subscription;
  userSubscription: Subscription;

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.userSubscription = this.loginService.userChanged.subscribe((user) => {
      if (user)
        this.user = user;
        this.setShoppingCart();
    })

  }

  setShoppingCart() : void {
    this.db.getData(SHOPPING_CARTS, this.user.shopping_cart_id).subscribe((shoppingCart) => {
      if (shoppingCart) {
        this.shoppingCart = shoppingCart;
        this.products$ = this.getProductsInCart();
        this.setUpIndicator();
      }
      else
        this.cartChecked = true;
    })
  }

  ngOnDestroy() {
    if (this.userSubscription)
      this.userSubscription.unsubscribe();
    if (this.notificationSubscription)
      this.notificationSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this._cd.detectChanges();
  }

  getProductsInCart(): Observable<Product[]> {
    const products: Product[] = [];
    this.shoppingCart.orderLine.forEach((lineItem) => {
      products.push(lineItem.product);
    })
    return Observable.create((observer) => {
      observer.next(products);
      observer.complete();
    })
  }

  checkingCart(): void {
    if (!this.user) return
    this.user.cartLastCheckedDate = new Date().getTime();
    this.toggleIndicator();
    this.loginService.update();
  }

  onShoppingCart(): void {
    console.log(this.cartLink);
    this.router.navigate([this.cartLink]);
  }

  private toggleIndicator() {
    this.setUpIndicator()
  }

  private setUpIndicator(): void {
    this.cartChecked = true;
    const lastChecked = this.user.cartLastCheckedDate;
    if (this.shoppingCart)
      if (this.isIndicatorNeeded(this.shoppingCart.lastUpdated, lastChecked)) {
        this.cartChecked = false;
      }
  }

  private isIndicatorNeeded(value: Date, compareDate: Date): boolean {
    if (!value || !compareDate) return false;
    const lastChecked = new Date(compareDate);
    const cartDate = new Date(value);
    return (cartDate.getTime() > lastChecked.getTime());
  }


}
