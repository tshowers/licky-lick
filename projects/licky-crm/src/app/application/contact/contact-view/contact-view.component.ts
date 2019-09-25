import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact, Address, EmailAddress, FOP, JustText, PhoneNumber, Project, Opportunity } from 'lick-data';
import { LickAppPageComponent } from 'lick-app-page';
import { NewsService, FirebaseDataService, LickyLoginService, CONTACTS } from 'licky-services';


@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent extends LickAppPageComponent implements OnInit, OnDestroy {

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

  searchArgument;

  constructor(public newsService: NewsService, public loginService: LickyLoginService, protected renderer2: Renderer2, public db: FirebaseDataService,
    public router: Router,
    private _route: ActivatedRoute) {
    super(router, loginService, db, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { contact: Contact }) => {
        // console.log("ABOUT TO VIEW", JSON.stringify(data.contact))
        this.contact = data.contact;
        this.setBreadCrumb();
        if (this.contact.isCompany && this.contact.company)
          this.searchArgument = this.contact.company.name;

        if (this.contact && this.contact.ssn)
          this.contact.ssn = "***-**-" + this.contact.ssn.substring(this.contact.ssn.length - 4)
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  private setBreadCrumb() : void {
    this.crumbs = [
      { name: "home", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: "view", link: "/application/contacts/" + this.contact.id, active: true },
    ]
  }

  onEdit() {
    this.router.navigate(['application', 'contacts', this.contact.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.contact.deleted = true;
    this.db.updateData(CONTACTS, this.contact.id, this.contact);
    this.router.navigate(['application', 'contacts']);
  }

  onBreadCrumb(link) : void {
      this.router.navigate([link]);
  }

  get diagnostic() {
    return JSON.stringify(this.contact, null, 2)
  }

}
