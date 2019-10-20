import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Address } from 'lick-data';
import { FirebaseDataService, ADDRESSES } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AddressViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Address> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    return this._db.getData(ADDRESSES + '/' + id1, id2)
    .pipe(map(address => {
      if (address) {
        this.incrementViewCount(address, id1, id2);
        return (address.id == id2) ? address : null;
      } else {
        if (id1)
          this.router.navigate(['application', 'contacts', id1, 'addresses']);
        else
          this.router.navigate(['application', 'contacts']);
        return null;
      }
    }));
  }

  private setSocialData(address: Address) : void {
    //TODO
  }

  private incrementViewCount(address: Address, id1, id2) : void {
    if (address) {
      address.id = id2;
      if (address.views && !isNaN(address.views)) {
        address.views++;
      } else {
        address.views = 0;
        address.views++;
      }
      address.lastViewed = new Date().getTime();
      this._db.updateData(ADDRESSES + '/' + id1, id2, address);
    }
  }

}
