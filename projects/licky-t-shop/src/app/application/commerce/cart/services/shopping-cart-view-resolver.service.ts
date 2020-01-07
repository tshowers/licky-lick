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
    console.info("USER", JSON.stringify(this._lickyLoginService.getUser()));
    return this.getShoppingCart(this._lickyLoginService.getUser())
  }

  getShoppingCart(user: User): Observable<ShoppingCart> {
    return this._db.getData(SHOPPING_CARTS, user.id)
      .pipe(
        map(shoppingCart => {
          if (shoppingCart)
            return shoppingCart;
          else
            return this.getNew();
        })
      )
  }


  getNew(): ShoppingCart {
    let data = new ShoppingCart();
    data.draft = false;
    return data;
  }


}
