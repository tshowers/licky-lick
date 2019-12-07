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
export class CatalogViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Catalog> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    return this._db.getData(CATALOGS + '/' + id1, id2)
    .pipe(map(catalog => {
      if (catalog) {
        this.incrementViewCount(catalog, id1, id2);
        return (catalog.id == id2) ? catalog : null;
      } else {
        if (id1)
          this.router.navigate(['application', 'stores', id1, 'catalogs']);
        else
          this.router.navigate(['application', 'stores']);
        return null;
      }
    }));
  }

  private setSocialData(catalog: Catalog) : void {
    //TODO
  }

  private incrementViewCount(catalog: Catalog, id1, id2) : void {
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
