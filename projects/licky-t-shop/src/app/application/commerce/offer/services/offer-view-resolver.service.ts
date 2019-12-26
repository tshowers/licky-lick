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
    const id3 = route.paramMap.get('id3');

    return this._db.getData(OFFERS + '/' + id1, id3)
    .pipe(map(offer => {
      if (offer) {
        this.incrementViewCount(offer, id1, id3);
        return (offer.id == id3) ? offer : null;
      } else {
        if (id1 && id2)
          this.router.navigate(['application', 'stores', id1, 'catalogs', id2,  'offers']);
        else
          this.router.navigate(['application', 'stores']);
        return null;
      }
    }));
  }

  private setSocialData(offer: Offer) : void {
    //TODO
  }

  private incrementViewCount(offer: Offer, id1, id3) : void {
    if (offer) {
      offer.id = id3;
      offer.expirationDate = this.setExpirationDate(offer);
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

  private setExpirationDate(offer: Offer) : Date {
    if (offer.expirationDate && offer.expirationDate.day) {
      offer.expirationDate = new Date(offer.expirationDate.year, (offer.expirationDate.month - 1), offer.expirationDate.day).getTime();
    }
    return offer.expirationDate;
  }
}
