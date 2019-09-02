import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
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
      console.log("WE GOT BACK", contact)
      if (contact) {
        this.setSocialData(contact);
        this.incrementViewCount(contact, id);
        return contact;
      } else {
        this.router.navigate(['application', 'contacts']);
        return null;
      }
    }));
  }
  private setSocialData(contact: Contact): void {
    // this._socialService.setDataItemSocial(contact);
  }

  private incrementViewCount(contact: Contact, id): void {
    if (contact && !contact.id) {
      if (!contact.id)
        contact.id = id;
      contact.views++;
      contact.lastViewed = new Date().getTime();
    }
    // this._db.updateData(CONTACTS, contact.id, contact);
  }

}
