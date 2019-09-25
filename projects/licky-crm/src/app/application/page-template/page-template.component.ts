import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'lick-data';
import { NewsService, FirebaseDataService, LickyLoginService, CONTACTS } from 'licky-services';
import { LickAppPageComponent } from 'lick-app-page';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.css']
})
export class PageTemplateComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  constructor(public newsService: NewsService, public loginService: LickyLoginService, protected renderer2: Renderer2, public db: FirebaseDataService, public router: Router) {
    super(router, loginService, db, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
  }

  setBreadCrumb() : void {
    this.crumbs = [
      { name: "home", link: "/application/contacts/dashboard", active: true },
    ]
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  onBreadCrumb(link) : void {
      this.router.navigate([link]);
  }

  get diagnostic() {
    return null;
  }

}
