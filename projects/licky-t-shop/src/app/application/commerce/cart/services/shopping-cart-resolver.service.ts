import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ShoppingCart } from 'lick-data';
import { FirebaseDataService, SHOPPING_CARTS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShoppingCart> {
    const id = route.paramMap.get('id');

    return this.getShoppingCart(id);
  }

  getShoppingCart(id): Observable<ShoppingCart> {
    if (id) {
      return this._db.getData(SHOPPING_CARTS, id)
        .pipe(
          map(shoppingCart => {
            console.info("shoppingCart", JSON.stringify(shoppingCart));
            if (shoppingCart) {
              ShoppingCart.restoreData(shoppingCart);
              return (shoppingCart.id == id) ? shoppingCart : (this.getNew());
            } else {
              return (this.getNew());
            }
          })
        )
    } else {
      return of(this.getNew());
    }

  }

  getNew(): ShoppingCart {
    let data = new ShoppingCart();
    data.draft = false;
    return data;
  }

}
