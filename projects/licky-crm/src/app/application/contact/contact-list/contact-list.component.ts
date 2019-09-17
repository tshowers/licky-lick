import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { LickyLoginService, FirebaseDataService, SortHelperService, CONTACTS } from 'licky-services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Contact } from 'lick-data';
import { LickAppPageComponent } from 'lick-app-page';
import { map } from 'rxjs/operators';

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

  constructor(protected renderer2: Renderer2, public loginService: LickyLoginService, public router: Router, public db: FirebaseDataService, private _sortHelper: SortHelperService) {
    super(router, loginService, db, renderer2);
  }

  ngOnInit() {
    this.setBreadCrumb();
    this.setDataSet();
  }

  ngOnDestroy() {  }

  private setBreadCrumb(): void {
    this.crumbs = [
      { name: "home", link: "/", active: false },
      { name: "contacts", link: "/application/contacts", active: true }
    ]
  }

  newPage(value): void {
    this.contacts$ = Observable.create((observer) => {
      observer.next(this.db.getRecordsToDisplay(value, this.pageSize, this._contacts));
      observer.complete();
    })
  }

  setDataSet(): void {
    this.db.getDataCollection(CONTACTS).subscribe((contacts: Contact[]) => {
      if (contacts) {
        this.contacts$ = this.db.getConvertDataToList(contacts)
          .pipe(map(contactData => {
            this.setCounts(contactData);
            return this.db.getRecordsToDisplay(1, this.pageSize, contactData);
          }));
      }
    });
  }

  setCounts(contacts: Contact[]): void {
    this._sortHelper.sortByLastName(contacts);
    this._contacts = contacts;
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
    console.log("onDelete", JSON.stringify(data));
    data.deleted = true;
    this.db.updateData(CONTACTS, data.id, data);
    this.router.navigate(['application', 'contacts', data.id])
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  get diagnostic() {
    return JSON.stringify(this._contacts, null, 2)
  }

}
