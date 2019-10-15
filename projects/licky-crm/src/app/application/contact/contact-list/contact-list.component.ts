import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CONTACTS } from 'licky-services';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Contact } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  contacts$: Observable<any[]>;

  deletedContacts: number = 0;

  sharedContacts: number = 0;

  draftContacts: number = 0;

  companyContacts: number = 0;

  pageSize = 5;

  totalRecords = 0;

  private _contacts: Contact[];

  private _contactsOriginal: Contact[];

  searchArgument = '';

  private _searchArgumentSubscription: Subscription;

  private _contactSubscription: Subscription;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
    this.dm.doContacts();
    this._contactSubscription = this.dm.contacts.subscribe((contacts: Contact[]) => {
      if (contacts) {
        this.setCounts(contacts);
        this.doDataMassage(contacts);
      }
    })
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._searchArgumentSubscription)
      this._searchArgumentSubscription.unsubscribe();
    this._contactSubscription.unsubscribe();
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


  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: true },
      { name: "new", link: "/application/contacts/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  newPage(value): void {
    this.contacts$ = Observable.create((observer) => {
      observer.next(this.dm.db.getRecordsToDisplay(value, this.pageSize, this._contacts));
      observer.complete();
    })
  }


  private doDataMassage(contacts: Contact[]): void {
    this.contacts$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._contacts));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, contacts));

      observer.complete();
    })

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
    this.dm.sortHelper.sortByLastName(contacts);
    this._contacts = contacts;
    this._contactsOriginal = contacts;
    this.totalRecords = contacts.length;
    this.deletedContacts = contacts.filter((contact) => contact.deleted).length;
    this.sharedContacts = contacts.filter((contact) => contact.shared).length;
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
    this.dm.db.updateData(CONTACTS, data.id, data);
    this.router.navigate(['application', 'contacts', data.id])
  }

  onSearch(value): void {
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
