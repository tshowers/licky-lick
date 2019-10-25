import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { JustText, Contact, Dropdown } from 'lick-data';
import { DropdownService, TypeFindService, JUST_TEXTS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  justText: JustText = new JustText();

  private _paramSubscription: Subscription;

  private _justTextSubscription: Subscription;

  private _contactSubscription: Subscription;

  contact_id;

  contact: Contact;



  constructor(public dm: DataMediationService,
    protected renderer2: Renderer2,
    public router: Router,
    public typeFindService: TypeFindService,
    private _dropdownService: DropdownService,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { justText: JustText }) => {
        if (data.justText) {
          this.justText = data.justText;
          this.contact_id = this.justText.contact_id
          this.setContactContext();
        }
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._contactSubscription)
      this._contactSubscription.unsubscribe();
    if (this._justTextSubscription)
      this._justTextSubscription.unsubscribe();
  }

  onSubmit(): void {
    (this.justText.id ? this.onUpdate() : this.saveNewJustText());
    this.router.navigate(['application', 'contacts', this.contact_id, 'notes']);
  }

  onUpdate(): void {
    this.dm.db.updateData(JUST_TEXTS + "/" + this.contact_id, this.justText.id, this.justText);
  }

  onDelete(): void {
    this.justText.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewJustText(): void {
    this.dm.db.writeData(JUST_TEXTS + "/" + this.contact_id, this.justText).subscribe((key) => {
      this.justText.id = key;
    });
  }

  onBrandNew(): void {
    this.justText = new JustText();
  }


  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "email address", link: "/application/contacts/" + this.contact_id + "/notes", active: false },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/notes/new", active: true },
    ]
  }

  private setContactContext(): void {
    if (this._route.snapshot.params['id']) {
      this.contact_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.contact_id = this._route.snapshot.params['id'];
        });
      this.setContact();
    }
  }

  private setContact(): void {
    this.dm.doContact(this.contact_id);
    this.dm.contact.subscribe((contact) => {
      this.contact = contact;
      this.setBreadCrumb();
    })
  }


  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'contacts'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return JSON.stringify(this.justText, null, 2)
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
