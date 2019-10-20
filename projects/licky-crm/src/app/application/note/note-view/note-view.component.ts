import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { JustText, Contact } from 'lick-data';
import { JUST_TEXTS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  justText: JustText;

  contact: Contact;

  contact_id: string;

  private _paramSubscription: Subscription;

  private _contactSubscription: Subscription;


  constructor(public dm: DataMediationService,
    protected renderer2: Renderer2,
    public router: Router,
    private _route: ActivatedRoute) {
      super(router, renderer2);
    }

  ngOnInit() {
    this._route.data
      .subscribe((data: { justText: JustText }) => {
        this.justText = data.justText;
        this.setContactContext();
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._contactSubscription)
      this._contactSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "note", link: "/application/contacts/" + this.contact_id + "/notes", active: false },
      { name: "view", link: "/application/contacts/" + this.contact_id + "/notes/" + this.justText.id, active: true },
    ]
  }

  onEdit(): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'notes', this.justText.id, 'edit']);
  }

  onDelete(): void {
    this.justText.deleted = true;
    this.dm.db.updateData(JUST_TEXTS + "/" + this.contact_id, this.justText.id, this.justText);
    this.router.navigate(['application', 'contacts', this.contact_id, 'notes']);
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

  get diagnostic() {
    return JSON.stringify(this.justText, null, 2)
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }

}
