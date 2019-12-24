import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from 'lick-data';
import { FirebaseDataService, PRODUCTS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');
    const id3 = route.paramMap.get('id3');

    return this._db.getData(PRODUCTS + '/' + id1, id3)
    .pipe(map(product => {
      if (product) {
        this.incrementViewCount(product, id1, id3);
        return (product.id == id3) ? product : null;
      } else {
        if (id1 && id2)
          this.router.navigate(['application', 'stores', id1, 'catalogs', id2, 'products']);
        else
          this.router.navigate(['application', 'stores']);
        return null;
      }
    }));
  }

  private setSocialData(product: Product) : void {
    //TODO
  }

  private incrementViewCount(product: Product, id1, id3) : void {
    if (product) {
      product.id = id3;
      if (product.views && !isNaN(product.views)) {
        product.views++;
      } else {
        product.views = 0;
        product.views++;
      }
      product.lastViewed = new Date().getTime();
      this._db.updateData(PRODUCTS + '/' + id1, id3, product);
    }
  }
}
