import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseDataService, EMAIL_ADDRESSES } from 'licky-services';
import { EmailAddress } from 'lick-data';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class EmailAddressViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmailAddress> {
    let id1 = route.paramMap.get('id');
    let id2 = route.paramMap.get('id2');

    return this._db.getData(EMAIL_ADDRESSES + '/' + id1, id2)
    .pipe(map(emailAddress => {
      if (emailAddress) {
        this.setSocialData(emailAddress);
        this.incrementViewCount(emailAddress, id1);
        return (emailAddress.id == id2) ? emailAddress : null;
      } else {
        if (id1)
          this.router.navigate(['/application/contacts/' + id1 + '/email-addresses']);
        else
          this.router.navigate(['/application/contacts']);
        return null;
      }
    }));
  }
  private setSocialData(emailAddress: EmailAddress) : void {
    // this._socialService.setDataItemSocial(emailAddress);
  }

  private incrementViewCount(emailAddress: EmailAddress, id1) : void {
    emailAddress.views++;
    emailAddress.lastViewed = new Date().getTime();
    this._db.updateData(EMAIL_ADDRESSES + '/' + id1, emailAddress.id, emailAddress);
  }

}
