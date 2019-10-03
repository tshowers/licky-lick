import { Injectable, OnDestroy } from '@angular/core';
import { SortHelperService, NewsService, FirebaseDataService, LickyLoginService, CONTACTS, TOPICS, FOPS, ADDRESSES, EMAIL_ADDRESSES, JUST_TEXTS, PHONE_NUMBERS } from 'licky-services';
import { Contact, Address, EmailAddress, FOP, JustText, PhoneNumber, Topic, User } from 'lick-data';
import { map } from 'rxjs/operators';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMediationService implements OnDestroy {

  public user: User;

  public firebaseUser;

  public photoURL;
  public displayName;
  public emailAddress;
  public loggedIn;
  public userName;
  public emailVerified;

  setupTimer;
  public contact = new Subject<Contact>();

  public contacts = new BehaviorSubject<Contact[]>(null);
  private _contacts: Contact[];

  public addresses = new BehaviorSubject<Address[]>(null);
  private _addresses: Address[];

  public emailAddresses = new BehaviorSubject<EmailAddress[]>(null);
  private _emailAddresses: EmailAddress[];

  public fops = new BehaviorSubject<FOP[]>(null);
  private _fops: FOP[];

  public notes = new BehaviorSubject<JustText[]>(null);
  private _notes: JustText[];

  public phoneNumbers = new BehaviorSubject<PhoneNumber[]>(null);
  private _phoneNumbers: PhoneNumber[];

  private _contactSubscription: Subscription;
  private _addressSubscription: Subscription;
  private _emailAddressSubscription: Subscription;
  private _fopSubscription: Subscription;
  private _noteSubscription: Subscription;
  private _phoneNumberSubscription: Subscription;
  private _userSubscription: Subscription;
  private _firebaseUserSubscription: Subscription;

  constructor(public newsService: NewsService, public loginService: LickyLoginService, public db: FirebaseDataService, public sortHelper: SortHelperService) {
    this.setFirebaseUser();
    this.setUser();
  }

  ngOnDestroy() {
    if (this._contactSubscription)
      this._contactSubscription.unsubscribe();
    if (this._firebaseUserSubscription)
      this._firebaseUserSubscription.unsubscribe();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
    if (this._addressSubscription)
      this._addressSubscription.unsubscribe();
    if (this._emailAddressSubscription)
      this._emailAddressSubscription.unsubscribe();
    if (this._fopSubscription)
      this._fopSubscription.unsubscribe();
    if (this._noteSubscription)
      this._noteSubscription.unsubscribe();
    if (this._phoneNumberSubscription)
      this._phoneNumberSubscription.unsubscribe();
  }

  public doAddresses(contact_id: string): void {
    this._addressSubscription = this.db.getDataCollection(ADDRESSES + "/" + contact_id, true )
      .subscribe((addressData: Address[]) => {
        if (addressData) {
          this._addresses = this.db.getListToArray(addressData);
          console.log("ADDRESSES TO ARRAY", JSON.stringify(this._addresses))
          this.addresses.next(this._addresses);
        }
      });
  }

  public doEmailAddresses(contact_id: string): void {
    this._emailAddressSubscription = this.db.getDataCollection(EMAIL_ADDRESSES + "/" + contact_id )
      .subscribe((data: EmailAddress[]) => {
        if (data) {
          this._emailAddresses = this.db.getListToArray(data);
          console.log("EMAIL ADDRESSES TO ARRAY", JSON.stringify(this._emailAddresses))
          this.emailAddress.next(this._emailAddresses);
        }
      });
  }

  public doFops(contact_id: string): void {
    this._fopSubscription = this.db.getDataCollection(FOPS + "/" + contact_id )
      .subscribe((data: FOP[]) => {
        if (data) {
          this._fops = this.db.getListToArray(data);
          console.log("FOPS TO ARRAY", JSON.stringify(this._fops))
          this.fops.next(this._fops);
        }
      });
  }

  public doNotes(contact_id: string): void {
    this._noteSubscription = this.db.getDataCollection(JUST_TEXTS + "/" + contact_id )
      .subscribe((data: JustText[]) => {
        if (data) {
          this._notes = this.db.getListToArray(data);
          console.log("FOPS TO ARRAY", JSON.stringify(this._notes))
          this.notes.next(this._notes);
        }
      });
  }

  public doPhoneNumbers(contact_id: string): void {
    this._phoneNumberSubscription = this.db.getDataCollection(PHONE_NUMBERS + "/" + contact_id )
      .subscribe((data: PhoneNumber[]) => {
        if (data) {
          this._phoneNumbers = this.db.getListToArray(data);
          console.log("PHONE NUMBERS TO ARRAY", JSON.stringify(this._notes))
          this.phoneNumbers.next(this._phoneNumbers);
        }
      });
  }

  public doContact(id: string) : void {
    // console.log("doContact()", JSON.stringify(this._contacts))
    this.db.getData(CONTACTS, id).pipe(map(contact => {
      console.log("GETTING CONTACT", id, contact);
      if (contact)
        this.contact.next(contact);
    }))
  }

  public getContact(id: string): Contact {
    return  (this._contacts) ?
    this._contacts.find(contact => contact.id == id) : null

  }

  public doContacts(): void {
    this.waitForUserSet();
  }

  private waitForUserSet(): void {
    this.setupTimer = setInterval(() => this.setDataSet(), 250);
  }

  private setDataSet(): void {
    if (this.loginService.getUser()) {
      clearInterval(this.setupTimer);
      this.setContacts()
    }
  }

  private setContacts(): void {
    this._contactSubscription = this.db.getDataCollection(CONTACTS)
      .subscribe((contactData: Contact[]) => {
        if (contactData) {
          this._contacts = this.db.getListToArray(contactData);
          // console.log("CONTACTS TO ARRAY", JSON.stringify(this._contacts))
          this.contacts.next(this._contacts);
        }
      });

  }

  private setFirebaseUser(): void {
    this._firebaseUserSubscription = this.loginService.firebaseUser.subscribe((firebaseUser) => {
      this.firebaseUser = firebaseUser;
      if (this.firebaseUser) {
        this.setUserProperties();
      }
    })
  }

  private setUser(): void {
    this.user = this.loginService.getUser();
    this._userSubscription = this.loginService.userChanged.subscribe((user) => {
      this.user = user;
    })
  }

  private setUserProperties(): void {
    this.photoURL = this.firebaseUser.photoURL;
    this.displayName = this.firebaseUser.displayName;
    this.emailAddress = this.firebaseUser.email;
    this.loggedIn = true;
    this.userName = this.firebaseUser.email;
    this.emailVerified = this.firebaseUser.emailVerified;
  }


}
