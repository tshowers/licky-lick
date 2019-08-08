import { Component, OnInit } from '@angular/core';
import { RemoteAssetService } from '../services/remote-asset.service';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent implements OnInit {

  public bodyText;

  menuItems: any[] = [
    {
      "link" : "/about",
      "name" : "Home",
    },
    {
      "link" : "/sign-up",
      "name" : "Sign Up"
    },
    {
      "link" : "/sign-in",
      "name" : "Login"
    },
  ]
  constructor(private _remoteAssetService: RemoteAssetService) { }

  ngOnInit() {
    this._remoteAssetService.getFileContents('./assets/privacy.txt', this._remoteAssetService.TEXT)
    .subscribe({
      next: data => {this.bodyText = data; },
      error: err => console.error(err)
    })

  }

}
