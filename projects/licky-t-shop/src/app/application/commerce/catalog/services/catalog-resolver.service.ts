import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Catalog } from 'lick-data';
import { FirebaseDataService, CATALOGS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Catalog> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    if (id1)
      return this.getCatalog(id1, id2);
    else
      this.router.navigate(['application', 'stores'])
  }

  getCatalog(id1, id2) : Observable<Catalog> {
    if (id2) {
      return this._db.getData(CATALOGS + '/' + id1, id2)
      .pipe(
        map(catalog => {
          if (catalog) {
            Catalog.restoreData(catalog);
            this.incrementViewCount(catalog, id1, id2);
            return (catalog.id == id2) ? catalog : (this.getNew(id1));
          } else {
            return this.getNew(id1);
          }
        })
      )
    } else {
      return of(this.getNew(id1));
    }

  }

  getNew(store_id: string): Catalog {
    let data = new Catalog();
    data.store_id = store_id
    data.draft = true;
    return data;
  }

  private incrementViewCount(catalog: Catalog, id1, id2): void {
    if (catalog) {
      catalog.id = id2;
      if (catalog.views && !isNaN(catalog.views)) {
        catalog.views++;
      } else {
        catalog.views = 0;
        catalog.views++;
      }
      catalog.lastViewed = new Date().getTime();
      this._db.updateData(CATALOGS + '/' + id1, id2, catalog);
    }
  }
}
