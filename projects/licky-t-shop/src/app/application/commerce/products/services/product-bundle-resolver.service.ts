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
    const id3 = route.paramMap.get('id3');

    if (id1)
      return this.getProductBundle(id1, id2, id3);
    else
      this.router.navigate(['application', 'stores'])
  }

  getProductBundle(id1, id2, id3) : Observable<ProductBundle> {
    if (id3) {
      return this._db.getData(PRODUCT_BUNDLES + '/' + id1, id3)
      .pipe(
        map(productBundle => {
          if (productBundle) {
            ProductBundle.restoreData(productBundle);
            this.incrementViewCount(productBundle, id1, id3);
            return (productBundle.id == id3) ? productBundle : this.getNew(id1, id2);
          } else {
            return this.getNew(id1, id2);
          }
        })
      )
    } else {
      return of(this.getNew(id1, id2));
    }

  }

  getNew(store_id: string, catalog_id: string): ProductBundle {
    let data = new ProductBundle();
    ProductBundle.restoreData(data);
    data.store_id = store_id
    data.catalog_id = catalog_id;
    data.draft = true;
    return data;
  }

  private incrementViewCount(productBundle: ProductBundle, id1, id3): void {
    if (productBundle) {
      productBundle.id = id3;
      if (productBundle.views && !isNaN(productBundle.views)) {
        productBundle.views++;
      } else {
        productBundle.views = 0;
        productBundle.views++;
      }
      productBundle.lastViewed = new Date().getTime();
      this._db.updateData(PRODUCT_BUNDLES + '/' + id1, id3, productBundle);
    }
  }
}
