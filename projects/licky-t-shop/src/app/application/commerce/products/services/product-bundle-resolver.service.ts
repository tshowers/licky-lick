import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ProductBundle } from 'lick-data';
import { FirebaseDataService, PRODUCT_BUNDLES } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductBundleResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductBundle> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    if (id1)
      return this.getProductBundle(id1, id2);
    else
      this.router.navigate(['application', 'stores'])
  }

  getProductBundle(id1, id2) : Observable<ProductBundle> {
    if (id2) {
      return this._db.getData(PRODUCT_BUNDLES + '/' + id1, id2)
      .pipe(
        map(productBundle => {
          if (productBundle) {
            ProductBundle.restoreData(productBundle);
            this.incrementViewCount(productBundle, id1, id2);
            return (productBundle.id == id2) ? productBundle : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        })
      )
    } else {
      return of(this.getNew(id1));
    }

  }

  getNew(store_id: string): ProductBundle {
    let data = new ProductBundle();
    data.store_id = store_id
    data.draft = true;
    return data;
  }

  private incrementViewCount(productBundle: ProductBundle, id1, id2): void {
    if (productBundle) {
      productBundle.id = id2;
      if (productBundle.views && !isNaN(productBundle.views)) {
        productBundle.views++;
      } else {
        productBundle.views = 0;
        productBundle.views++;
      }
      productBundle.lastViewed = new Date().getTime();
      this._db.updateData(PRODUCT_BUNDLES + '/' + id1, id2, productBundle);
    }
  }
}
