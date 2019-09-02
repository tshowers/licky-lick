import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { EmailAddress } from 'lick-data';
import { FirebaseDataService, EMAIL_ADDRESSES } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EmailAddressResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmailAddress> {
    let id1 = route.paramMap.get('id');
    let id2 = route.paramMap.get('id2');
    if (id1)
      return this.getEmailAddress(id1, id2);
    else
      this.router.navigate(['application', 'contacts'])
  }

  getEmailAddress(id1, id2): Observable<EmailAddress> {

    if (id2) {
      return this._db.getData(EMAIL_ADDRESSES + '/' + id1, id2)
        .pipe(map(emailAddress => {
          if (emailAddress) {
            // EmailAddress.restoreData(emailAddress);
            this.incrementViewCount(emailAddress, id1);
            return (emailAddress.id == id2) ? emailAddress : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        }))
    } else {
      return of(this.getNew(id1));
    }
  }

  getNew(contact_id: string): EmailAddress {
    let data = new EmailAddress();
    data.draft = true;
    data.contact_id = contact_id
    return data;
  }

  private incrementViewCount(emailAddress: EmailAddress, id1): void {
    emailAddress.views++;
    emailAddress.lastViewed = new Date().getTime();
    this._db.updateData(EMAIL_ADDRESSES + '/' + id1, emailAddress.id, emailAddress);
  }


}
