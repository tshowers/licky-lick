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

    if (id1)
      return this.getOffer(id1, id2);
    else
      this.router.navigate(['application', 'stores'])
  }

  getOffer(id1, id2) : Observable<Offer> {
    if (id2) {
      return this._db.getData(OFFERS + '/' + id1, id2)
      .pipe(
        map(offer => {
          if (offer) {
            Offer.restoreData(offer);
            this.incrementViewCount(offer, id1, id2);
            return (offer.id == id2) ? offer : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        })
      )
    } else {
      return of(this.getNew(id1));
    }

  }

  getNew(store_id: string): Offer {
    let data = new Offer();
    data.store_id = store_id
    data.draft = true;
    return data;
  }

  private incrementViewCount(offer: Offer, id1, id2): void {
    if (offer) {
      offer.id = id2;
      if (offer.views && !isNaN(offer.views)) {
        offer.views++;
      } else {
        offer.views = 0;
        offer.views++;
      }
      offer.lastViewed = new Date().getTime();
      this._db.updateData(OFFERS + '/' + id1, id2, offer);
    }
  }
}
