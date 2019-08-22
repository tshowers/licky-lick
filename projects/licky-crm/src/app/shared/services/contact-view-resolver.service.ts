import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/'
import { Router,  Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseDataService, CONTACTS } from 'licky-services';
import { Contact } from 'lick-data';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ContactViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
    let id = route.paramMap.get('id');

    return this._db.getData(CONTACTS, id).pipe(map(contact => {
      if (contact) {
        this.setSocialData(contact);
        this.incrementViewCount(contact);
        return (contact.id == id) ? contact : null;
      } else {
        this.router.navigate(['/app/contacts/']);
        return null;
      }
    }));
  }
  private setSocialData(contact: Contact) : void {
    // this._socialService.setDataItemSocial(contact);
  }

  private incrementViewCount(contact: Contact) : void {
    contact.views++;
    contact.lastViewed = new Date().getTime();
    this._db.updateData(CONTACTS, contact.id, contact);
  }

}
