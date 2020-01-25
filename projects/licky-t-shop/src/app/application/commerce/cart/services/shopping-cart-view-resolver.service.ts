import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ShoppingCart, User } from 'lick-data';
import { FirebaseDataService, LickyLoginService, SHOPPING_CARTS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router, private _lickyLoginService: LickyLoginService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShoppingCart> {
    return this.getShoppingCart(this._lickyLoginService.getUser())
  }

  getShoppingCart(user: User): Observable<ShoppingCart> {
    if (user && user.shopping_cart_id)
      return this._db.getData(SHOPPING_CARTS, user.shopping_cart_id)
        .pipe(
          map(shoppingCart => {
            // console.info("shoppingCart", JSON.stringify(shoppingCart));
            if (shoppingCart)
              return shoppingCart;
            else
              return this.getNew();
          })
        )
    else return of(this.getNew())
  }


  getNew(): ShoppingCart {
    let data = new ShoppingCart();
    data.draft = false;
    return data;
  }


}
