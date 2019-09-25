import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService, FirebaseDataService } from 'licky-services';
import { LickAppPageComponent } from 'lick-app-page';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  message;

  constructor(protected renderer2: Renderer2, public loginService: LickyLoginService, public router: Router, public db: FirebaseDataService) {
    super(router, loginService, db, renderer2);
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
    this.loginService.sendEmailVerification();
    this.message = "Check your email.";
  }

}
