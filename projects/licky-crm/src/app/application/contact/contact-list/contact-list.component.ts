import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseDataService, CONTACTS } from 'licky-services';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'lick-data';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  $contacts: Observable<any[]>;
  data: Contact[];

  constructor(public router: Router, public db: FirebaseDataService) {

  }

  ngOnInit() {
    this.setDataSet();
  }

  ngOnDestroy() {

  }

  setDataSet() : void {
    // console.log(CONTACTS)
    this.db.getDataCollection(CONTACTS).subscribe((contacts: Contact[]) => {
      console.log(JSON.stringify(contacts));
      if (contacts)
      this.data = contacts;
    });
  }

}
