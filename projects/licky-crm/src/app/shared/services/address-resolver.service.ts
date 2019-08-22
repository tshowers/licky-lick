import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Address } from 'lick-data';
import { FirebaseDataService, ADDRESSES } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AddressResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Address> {
    let id1 = route.paramMap.get('id');
    let id2 = route.paramMap.get('id2');

    if (id1)
      return this.getAddress(id1, id2);
    else
      this.router.navigate(['application', 'contacts'])
  }

  getAddress(id1, id2) : Observable<Address> {
    if (id2) {
      return this._db.getDataCollection(ADDRESSES + '/' + id1)
      .pipe(
        map(address => {
          if (address) {
            Address.restoreData(address);
            this.incrementViewCount(address, id1);
            return (address.id == id2) ? address : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        })
      )
    } else {
      return of(this.getNew(id1));
    }

  }

  getNew(contact_id: string): Address {
    let data = new Address();
    data.contact_id = contact_id
    data.draft = true;
    return data;
  }

  private incrementViewCount(address: Address, id1): void {
    address.views++;
    address.lastViewed = new Date().getTime();
    this._db.updateData(ADDRESSES + '/' + id1, address.id, address);
  }


}
