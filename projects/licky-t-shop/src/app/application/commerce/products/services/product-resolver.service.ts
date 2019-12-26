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
export class ProductResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');
    const id3 = route.paramMap.get('id3');

    if (id1)
      return this.getProduct(id1, id2, id3);
    else
      this.router.navigate(['application', 'stores'])
  }

  getProduct(id1, id2, id3) : Observable<Product> {
    if (id2) {
      return this._db.getData(PRODUCTS + '/' + id1, id3)
      .pipe(
        map(product => {
          if (product) {
            Product.restoreData(product);
            this.incrementViewCount(product, id1, id3);
            return (product.id == id3) ? product : (this.getNew(id1, id2));
          } else {
            return this.getNew(id1, id2);
          }
        })
      )
    } else {
      let y = this.getNew(id1, id2);
      return of(y);
    }

  }

  getNew(store_id: string, catalog_id: string): Product {
    let data = new Product();
    data.store_id = store_id;
    data.catalog_id = catalog_id;
    data.draft = true;
    return data;
  }

  private incrementViewCount(product: Product, id1, id3): void {
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
