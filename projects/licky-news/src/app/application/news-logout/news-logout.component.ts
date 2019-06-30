import { Component, OnInit } from '@angular/core';
import { LickyLoginService } from 'licky-services';
import { AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-news-logout',
  templateUrl: './news-logout.component.html',
  styleUrls: ['./news-logout.component.css']
})
export class NewsLogoutComponent implements OnInit {


  constructor(private _loginService: LickyLoginService, private _authService: AuthService) { }

  ngOnInit() {
    this._loginService.signOut();
    this._authService.setStatus(false);
  }

}
