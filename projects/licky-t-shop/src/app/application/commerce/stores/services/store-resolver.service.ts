import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from 'lick-data';
import { FirebaseDataService, STORES } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Store> {
    const id = route.paramMap.get('id');
    return this.getStore(id);
  }

  getStore(id): Observable<Store> {
    if (id) {
      return this._db.getData(STORES, id)
        .pipe(map(store => {
          if (store) {
            Store.restoreData(store);
            this.incrementViewCount(store, id);
            return (store.id == id) ? store : of(new Store());
          } else {
            return of(this.getStoreObject());
          }
        }))
    } else {
      return of(this.getStoreObject());
    }
  }

  private getStoreObject(): Store {
    let store = new Store();
    store.draft = true;
    store.sections = [];
    return store;

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
  }

}
