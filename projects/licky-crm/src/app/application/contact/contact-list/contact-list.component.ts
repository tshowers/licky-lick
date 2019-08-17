import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { LickyLoginService, FirebaseDataService, CONTACTS } from 'licky-services';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'lick-data';
import { LickAppPageComponent } from 'lick-app-page';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  $contacts: Observable<any[]>;
  data: Contact[];

  constructor(protected renderer2: Renderer2, public loginService: LickyLoginService, public router: Router, public db: FirebaseDataService) {
    super(renderer2);
  }

  ngOnInit() {
    this.setDataSet();
  }

  ngOnDestroy() {

  }

  setDataSet() : void {
    this.db.getDataCollection(CONTACTS).subscribe((contacts: Contact[]) => {
      console.log(JSON.stringify(contacts));
      if (contacts)
      this.data = contacts;
    });
  }


}
