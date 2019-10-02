import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LickAppPageComponent } from 'lick-app-page';
import { DataMediationService } from '../../shared/services/data-mediation.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  message;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  private setBreadCrumb(): void {
    this.crumbs = [
      { name: "home", link: "/", active: false },
      { name: "profile", link: "/application/profile", active: true }
    ]
  }

  onPageEvent() {
    this.dm.loginService.sendEmailVerification();
    this.message = "Check your email.";
  }

}
