import { Component, OnInit, OnDestroy } from '@angular/core';
import { RemoteAssetService } from 'licky-services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent implements OnInit, OnDestroy {

  public bodyText;
  private _fileSubscription : Subscription;

  constructor(public router: Router, private _remoteAssetService: RemoteAssetService) { }

  ngOnInit() {
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
