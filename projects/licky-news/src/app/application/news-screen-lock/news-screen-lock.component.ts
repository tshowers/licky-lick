import { Component, OnInit } from '@angular/core';
import { User } from 'lick-data';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-news-screen-lock',
  templateUrl: './news-screen-lock.component.html',
  styleUrls: ['./news-screen-lock.component.css']
})
export class NewsScreenLockComponent implements OnInit {

  public user: User;
  public status : string = "LOCKED";

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    if (this._authService.firebaseUser) {
      this.user.name = this._authService.firebaseUser.displayName;
      this.user.url = this._authService.firebaseUser.photoURL;
      this.user.shared = false;
      this.user.publishedAt = new Date();
      this.user.timeStamp = new Date();
      this.user.id = this._authService.firebaseUser.uid;
      this.user.userName = this._authService.firebaseUser.displayName;
    } else {
      this.user = new User();
      this.user.name = "Guest";
      this.user.url = "http://via.placeholder.com/100x100";
      this.user.shared = false;
      this.user.publishedAt = new Date();
      this.user.timeStamp = new Date();
      this.user.id = Math.floor(Math.random() * 1000);
      this.user.userName = "Guest";
    }
  }

}
