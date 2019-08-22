import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PhoneNumber } from 'lick-data';
import { FirebaseDataService, PHONE_NUMBERS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PhoneNumberResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhoneNumber> {
    let id1 = route.paramMap.get('id');
    let id2 = route.paramMap.get('id2');
    if (id1)
      return this.getPhoneNumber(id1, id2)
    else
      this.router.navigate(['application', 'contacts'])
  }

  getPhoneNumber(id1, id2): Observable<PhoneNumber> {
    if (id2) {
      return this._db.getData(PHONE_NUMBERS + '/' + id1, id2)
        .pipe(map(phoneNumber => {
          if (phoneNumber) {
            // PhoneNumber.restoreData(phoneNumber);
            return (phoneNumber.id == id2) ? phoneNumber : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        }))
    } else {
      return of(this.getNew(id1));
    }

  }

  getNew(contact_id: string): PhoneNumber {
    let data = new PhoneNumber();
    data.draft = true;
    data.contact_id = contact_id
    return data;
  }

  private incrementViewCount(phoneNumber: PhoneNumber, id1): void {
    phoneNumber.views++;
    phoneNumber.lastViewed = new Date().getTime();
    this._db.updateData(PHONE_NUMBERS + '/' + id1, phoneNumber.id, phoneNumber);
  }

}
