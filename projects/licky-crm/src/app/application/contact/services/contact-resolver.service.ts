import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Contact } from 'lick-data';
import { FirebaseDataService, CONTACTS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ContactResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
    const id = route.paramMap.get('id');
    const user = route.queryParamMap.get('user');
    const employee = route.queryParamMap.get('employee');
    return this.getContact(id, user, employee);
  }

  getContact(id, user, employee): Observable<Contact> {
    if (id) {
      return this._db.getData(CONTACTS, id)
        .pipe(map(contact => {
          if (contact) {
            Contact.restoreData(contact);
            this.incrementViewCount(contact, id);
            return (contact.id == id) ? contact : new Contact();
          } else {
            return this.getContactObject(user, employee);
          }
        }))
    } else {
      return of(this.getContactObject(user, employee));
    }
  }

  private getContactObject(user, employee): Contact {
    let contact = new Contact();
    contact.draft = true;
    if (user) {
      contact.systemUser = true;
      this.fillContactWithUserData(contact);
    } else if (employee) {
      contact.systemUser = true;
      contact.employee = true;
      this.fillContactWithUserData(contact);
    }
    return contact;
  }

  private fillContactWithUserData(contact: Contact) {
    const theName = contact.name;
    if (theName) {
      const space = theName.indexOf(" ");
      let firstName = '';
      let lastName = '';
      if (space > 0) {
        firstName = theName.substr(0, space);
        lastName = theName.substr(space + 1);
      }
      else
        firstName = theName;
      contact.firstName = firstName;
      contact.lastName = lastName;
    }

    // contact.url = this._authService.getPhotoURL();
  }

  private incrementViewCount(contact: Contact, id): void {
    if (contact) {
      contact.id = id;
      if (contact.views && !isNaN(contact.views)) {
        contact.views++;
      } else {
        contact.views = 0;
        contact.views++;
      }
      contact.lastViewed = new Date().getTime();
      this._db.updateData(CONTACTS, id, contact);
    }
  }


}
