import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LickAppPageComponent } from 'lick-app-page';
import { DataMediationService } from '../../shared/services/data-mediation.service';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.css']
})
export class PageTemplateComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router) {
    super(router,renderer2);
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
