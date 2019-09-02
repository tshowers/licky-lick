import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { LickyLoginService, FirebaseDataService, CONTACTS } from 'licky-services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Contact } from 'lick-data';
import { LickAppPageComponent } from 'lick-app-page';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  contacts$: Observable<any[]>;
  deletedContacts : number = 0;
  privateContacts : number = 0;
  draftContacts : number =0;
  companyContacts : number = 0;

  constructor(protected renderer2: Renderer2, public loginService: LickyLoginService, public router: Router, public db: FirebaseDataService) {
    super(router, loginService, db, renderer2);
  }

  ngOnInit() {
    this.setBreadCrumb();
    this.setDataSet();
  }

  ngOnDestroy() {

  }

  setBreadCrumb() : void {
    this.crumbs = [
      { name: "home", link: "/", active: false },
      { name: "contacts", link: "/application/contacts", active: true }
    ]
  }


  setDataSet(): void {
    this.db.getDataCollection(CONTACTS).subscribe((contacts: Contact[]) => {
      if (contacts) {
        // console.log("Data=" + JSON.stringify(contacts));
        this.contacts$ = this.db.getConvertDataToList(contacts);
        this.setCounts();
      }
    });
  }

  setCounts() : void {
    this.contacts$.subscribe((contacts) => {
      this.deletedContacts = contacts.filter((contact) => contact.deleted).length;
      this.privateContacts = contacts.filter((contact) => !contact.shared).length;
      this.draftContacts = contacts.filter((contact) => contact.draft).length;
      this.companyContacts = contacts.filter((contact) => contact.isCompany).length;
    })
  }


  onDetail(data) : void {
    console.log("onDetail", JSON.stringify(data));
    this.router.navigate(['application', 'contacts', data.id])
  }

  onEdit(data) : void {
    console.log("onEdit", JSON.stringify(data));
  }

  onDelete(data) : void {
    console.log("onDelete", JSON.stringify(data));
  }
}
