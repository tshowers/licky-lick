import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseDataService, PHONE_NUMBERS } from 'licky-services';
import { PhoneNumber } from 'lick-data';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class PhoneNumberViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhoneNumber> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    return this._db.getData(PHONE_NUMBERS + '/' + id1, id2)
      .pipe(map(phoneNumber => {
        if (phoneNumber) {
          this.incrementViewCount(phoneNumber, id1, id2);
          return (phoneNumber.id == id2) ? phoneNumber : null;
        } else {
          if (id1)
            this.router.navigate(['application', 'contacts', id1, 'phone-numbers']);
          else
            this.router.navigate(['application', 'contacts']);
          return null;
        }
      }));
  }
  private setSocialData(phoneNumber: PhoneNumber): void {
    //TODO
  }

  private incrementViewCount(phoneNumber: PhoneNumber, id1, id2): void {
    if (phoneNumber) {
      phoneNumber.id = id2;
      if (phoneNumber.views && !isNaN(phoneNumber.views)) {
        phoneNumber.views++;
      } else {
        phoneNumber.views = 0;
        phoneNumber.views++;
      }
      phoneNumber.lastViewed = new Date().getTime();
      this._db.updateData(PHONE_NUMBERS + '/' + id1, id2, phoneNumber);
    }
  }

}
