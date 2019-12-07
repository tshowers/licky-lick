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
export class ShoppingCartViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShoppingCart> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    return this._db.getData(SHOPPING_CARTS + '/' + id1, id2)
    .pipe(map(shoppingCart => {
      if (shoppingCart) {
        this.incrementViewCount(shoppingCart, id1, id2);
        return (shoppingCart.id == id2) ? shoppingCart : null;
      } else {
        if (id1)
          this.router.navigate(['application', 'stores', id1, 'shopping-carts']);
        else
          this.router.navigate(['application', 'stores']);
        return null;
      }
    }));
  }

  private setSocialData(shoppingCart: ShoppingCart) : void {
    //TODO
  }

  private incrementViewCount(shoppingCart: ShoppingCart, id1, id2) : void {
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
