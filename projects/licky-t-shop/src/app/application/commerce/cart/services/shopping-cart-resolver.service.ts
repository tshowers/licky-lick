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
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    if (id1)
      return this.getShoppingCart(id1, id2);
    else
      this.router.navigate(['application', 'stores'])
  }

  getShoppingCart(id1, id2) : Observable<ShoppingCart> {
    if (id2) {
      return this._db.getData(SHOPPING_CARTS + '/' + id1, id2)
      .pipe(
        map(shoppingCart => {
          if (shoppingCart) {
            ShoppingCart.restoreData(shoppingCart);
            this.incrementViewCount(shoppingCart, id1, id2);
            return (shoppingCart.id == id2) ? shoppingCart : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        })
      )
    } else {
      return of(this.getNew(id1));
    }

  }

  getNew(store_id: string): ShoppingCart {
    let data = new ShoppingCart();
    data.store_id = store_id
    data.draft = true;
    return data;
  }

  private incrementViewCount(shoppingCart: ShoppingCart, id1, id2): void {
    if (shoppingCart) {
      shoppingCart.id = id2;
      if (shoppingCart.views && !isNaN(shoppingCart.views)) {
        shoppingCart.views++;
      } else {
        shoppingCart.views = 0;
        shoppingCart.views++;
      }
      shoppingCart.lastViewed = new Date().getTime();
      this._db.updateData(SHOPPING_CARTS + '/' + id1, id2, shoppingCart);
    }
  }
}
