import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseDataService, STORES } from 'licky-services';
import { Store } from 'lick-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Store> {
    const id = route.paramMap.get('id');

    return this._db.getData(STORES, id).pipe(map(store => {
      if (store) {
        this.setSocialData(store);
        this.incrementViewCount(store, id);
        return store;
      } else {
        this.router.navigate(['application', 'stores']);
        return null;
      }
    }));
  }

  private setSocialData(store: Store): void {

  }

  private incrementViewCount(store: Store, id): void {
    if (store) {
      store.id = id;
      if (store.views && !isNaN(store.views)) {
        store.views++;
      } else {
        store.views = 0;
        store.views++;
      }
      store.lastViewed = new Date().getTime();
      this._db.updateData(STORES, id, store);
    }
  }}
