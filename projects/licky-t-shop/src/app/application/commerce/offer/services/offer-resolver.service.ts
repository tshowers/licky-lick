import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Offer } from 'lick-data';
import { FirebaseDataService, OFFERS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offer> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');
    const id3 = route.paramMap.get('id3');

    if (id1)
      return this.getOffer(id1, id2, id3);
    else
      this.router.navigate(['application', 'stores'])
  }

  getOffer(id1, id2, id3) : Observable<Offer> {
    if (id2) {
      return this._db.getData(OFFERS + '/' + id1, id3)
      .pipe(
        map(offer => {
          if (offer) {
            Offer.restoreData(offer);
            this.incrementViewCount(offer, id1, id3);
            return (offer.id == id2) ? offer : this.getNew(id1, id2);
          } else {
            return this.getNew(id1, id2);
          }
        })
      )
    } else {
      return of(this.getNew(id1, id2));
    }

  }

  getNew(store_id: string, catalog_id: string): Offer {
    let data = new Offer();
    data.store_id = store_id
    data.catalog_id = catalog_id;
    data.draft = true;
    return data;
  }

  private incrementViewCount(offer: Offer, id1, id3): void {
    if (offer) {
      offer.id = id3;
      if (offer.views && !isNaN(offer.views)) {
        offer.views++;
      } else {
        offer.views = 0;
        offer.views++;
      }
      offer.lastViewed = new Date().getTime();
      this._db.updateData(OFFERS + '/' + id1, id3, offer);
    }
  }
}
