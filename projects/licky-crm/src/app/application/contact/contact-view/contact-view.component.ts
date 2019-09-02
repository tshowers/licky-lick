import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact, Address, EmailAddress, FOP, JustText, PhoneNumber, Project, Opportunity } from 'lick-data';
import { LickAppPageComponent } from 'lick-app-page';
import { FirebaseDataService, LickyLoginService, CONTACTS } from 'licky-services';


@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  // Contact item for this page
  contact: Contact;

  $addresses: Observable<Address[]>;

  $emailAddresses: Observable<EmailAddress[]>;

  $fops: Observable<FOP[]>;

  $notes: Observable<JustText[]>;

  $phoneNumbers: Observable<PhoneNumber[]>;

  $projects: Observable<Project[]>;

  $opportunities: Observable<Opportunity[]>;

  canEdit = true;

  canDelete = true;

  constructor(public loginService: LickyLoginService, protected renderer2: Renderer2, public db: FirebaseDataService,
    public router: Router,
    private _route: ActivatedRoute) {
    super(router, loginService, db, renderer2);
  }

  ngOnInit() {
    this._route.data
      .subscribe((data: { contact: Contact }) => {
        console.log("ABOUT TO VIEW", JSON.stringify(data.contact))
        this.contact = data.contact;
        this.setBreadCrumb();
        if (this.contact && this.contact.ssn)
          this.contact.ssn = "***-**-" + this.contact.ssn.substring(this.contact.ssn.length - 4)
      });
  }

  ngOnDestroy() {

  }

  setBreadCrumb() : void {
    this.crumbs = [
      { name: "home", link: "/", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: "view", link: "/application/contacts/" + this.contact.id, active: true },
    ]
  }


  onAll() {
    this.router.navigate(['application', 'contacts']);
  }

  // Edit Contact item
  onEdit() {
    this.router.navigate(['application', 'contacts', this.contact.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  // Delete this contact item
  onDelete() {
    // this.db.deleteData(CONTACTS + this.authService.getDataPrefix(), this.contact.id);
    this.onAll();
  }

  get diagnostic() {
    return JSON.stringify(this.contact, null, 2)
  }


}
