import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { LickyLoginService, FirebaseDataService, SortHelperService, CONTACTS } from 'licky-services';
import { Observable } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Contact } from 'lick-data';
import { LickAppPageComponent } from 'lick-app-page';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  contacts$: Observable<any[]>;

  deletedContacts: number = 0;

  privateContacts: number = 0;

  draftContacts: number = 0;

  companyContacts: number = 0;

  pageSize = 5;

  totalRecords = 0;

  private _contacts: Contact[];

  private _contactsOriginal: Contact[];

  searchArgument = '';

  private _searchArgumentSubscription: Subscription;

  constructor(protected renderer2: Renderer2, public loginService: LickyLoginService, public router: Router, public db: FirebaseDataService, private _sortHelper: SortHelperService, private _route: ActivatedRoute) {
    super(router, loginService, db, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
    this.waitForUserSet();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._searchArgumentSubscription)
      this._searchArgumentSubscription.unsubscribe();
  }

  private isSearch(): boolean {
    if (this._route.snapshot.queryParams['searchArgument']) {
      this.searchArgument = this._route.snapshot.queryParams['searchArgument'];
      this._searchArgumentSubscription = this._route.queryParams.subscribe(
        (params: Params) => {
          this.searchArgument = this._route.snapshot.queryParams['searchArgument'];
        }
      )
      return true;
    }
    return false;
  }

  private waitForUserSet(): void {
    this.setupTimer = setInterval(() => this.setDataSet(), 250);
  }

  private setBreadCrumb(): void {
    this.crumbs = [
      { name: "home", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: true },
      { name: "new", link: "/application/contacts/new", active: false },
    ]
  }

  newPage(value): void {
    this.contacts$ = Observable.create((observer) => {
      observer.next(this.db.getRecordsToDisplay(value, this.pageSize, this._contacts));
      observer.complete();
    })
  }

  private setDataSet(): void {
    if (this.loginService.getUser()) {
      clearInterval(this.setupTimer);
      this.db.getDataCollection(CONTACTS).subscribe((contacts: Contact[]) => {
        if (contacts) {
          this.doDataMassage(contacts);
        }
      });
    }
  }

  private doDataMassage(contacts: Contact[]): void {
    this.contacts$ = this.db.getConvertDataToList(contacts)
      .pipe(map(contactData => {
        this.setCounts(contactData);
        if (this.isSearch()) {
          this.setSearchResult()
          return this.db.getRecordsToDisplay(1, this.pageSize, this._contacts)
        }
        else
          return this.db.getRecordsToDisplay(1, this.pageSize, contactData);
      }));
  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._contacts = this._contactsOriginal.filter(
        (contact) => {
          return ((contact.firstName && (contact.firstName.toLowerCase().indexOf(this.searchArgument) >= 0)) || (contact.lastName && (contact.lastName.toLowerCase().indexOf(this.searchArgument) >= 0)))
        });
    else
      this._contacts = this._contactsOriginal;
  }

  private setCounts(contacts: Contact[]): void {
    this._sortHelper.sortByLastName(contacts);
    this._contacts = contacts;
    this._contactsOriginal = contacts;
    this.totalRecords = contacts.length;
    this.deletedContacts = contacts.filter((contact) => contact.deleted).length;
    this.privateContacts = contacts.filter((contact) => !contact.shared).length;
    this.draftContacts = contacts.filter((contact) => contact.draft).length;
    this.companyContacts = contacts.filter((contact) => contact.isCompany).length;
  }

  onDetail(data): void {
    this.router.navigate(['application', 'contacts', data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'contacts', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.db.updateData(CONTACTS, data.id, data);
    this.router.navigate(['application', 'contacts', data.id])
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value): void {
    console.log("SEARCHING FOR", value);
    if (value == null)
      this.searchArgument = ''
    else
      this.searchArgument = value;
    this.setSearchResult();
    this.newPage(1);
  }

  get diagnostic() {
    return "Searching=" + this.searchArgument + " - - - - " + JSON.stringify(this._contacts, null, 2)
  }

}
