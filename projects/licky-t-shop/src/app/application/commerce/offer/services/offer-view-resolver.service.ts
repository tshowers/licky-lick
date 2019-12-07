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
export class OfferViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offer> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    return this._db.getData(OFFERS + '/' + id1, id2)
    .pipe(map(offer => {
      if (offer) {
        this.incrementViewCount(offer, id1, id2);
        return (offer.id == id2) ? offer : null;
      } else {
        if (id1)
          this.router.navigate(['application', 'stores', id1, 'offers']);
        else
          this.router.navigate(['application', 'stores']);
        return null;
      }
    }));
  }

  private setSocialData(offer: Offer) : void {
    //TODO
  }

  private incrementViewCount(offer: Offer, id1, id2) : void {
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
