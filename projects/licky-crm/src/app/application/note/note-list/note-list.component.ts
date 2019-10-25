import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { JustText, Contact } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { JUST_TEXTS } from 'licky-services';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  data$: Observable<any[]>;

  private _justTexts: JustText[];

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _justTextSubscription: Subscription;

  private _paramSubscription: Subscription;

  contact_id;

  contact: Contact;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setContactContext();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._searchArgumentSubscription)
      this._searchArgumentSubscription.unsubscribe();
    if (this._justTextSubscription)
      this._justTextSubscription.unsubscribe();
  }

  private setContactContext(): void {
    if (this._route.snapshot.params['id']) {
      this.contact_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.contact_id = this._route.snapshot.params['id'];
        });
      this.setContact();
      this.setJustTexts();
    }
  }

  private setContact(): void {
    this.dm.doContact(this.contact_id);
    this.dm.contact.subscribe((contact) => {
      this.contact = contact;
      this.setBreadCrumb();
    })
  }

  private setJustTexts(): void {
    this.dm.doNotes(this.contact_id);
    this._justTextSubscription = this.dm.notes.subscribe((justTexts: JustText[]) => {
      if (justTexts) {
        this.totalRecords = justTexts.length;
        this._justTexts = justTexts;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "note", link: "/application/contacts/" + this.contact_id + "/notes", active: true },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/notes/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'notes', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let justTexts = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._justTexts);
      observer.next(justTexts);
      observer.complete();
    })
  }

  onDetail(data): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'notes',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'notes', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(JUST_TEXTS + '/' + this.contact_id, data.id, data);
    this.router.navigate(['application', 'contacts', this.contact_id, 'notes',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'contacts'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
