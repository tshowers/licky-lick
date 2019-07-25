import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteAssetService } from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent implements OnInit, OnDestroy {

  public headingText = "Privacy Policy";
  public backgroundImage = 'assets/images/privacy.jpg';
  public bodyText;
  private _fileSubscription : Subscription;

  constructor(public router: Router, private _remoteAssetService: RemoteAssetService) { }

  ngOnInit() {
    // Get Terms of service from file
    this._fileSubscription = this._remoteAssetService.getFileContents('./assets/privacy.txt', this._remoteAssetService.TEXT)
    .subscribe({
      next: data => {this.bodyText = data; },
      error: err => console.error(err)
    })
  }

  ngOnDestroy() {
    this._fileSubscription.unsubscribe();
  }

}
