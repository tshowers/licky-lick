import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteAssetService } from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: ['./terms-page.component.css']
})
export class TermsPageComponent implements OnInit, OnDestroy {

  public headingText = "Terms of Service";
  public backgroundImage = 'assets/images/terms-of-service.jpg';
  public bodyText;
  private _fileSubscription : Subscription;


  constructor(public router: Router, private _remoteAssetService: RemoteAssetService) { }

  ngOnInit() {
    // Get Terms of service from file
    this._fileSubscription = this._remoteAssetService.getFileContents('./assets/terms.txt', this._remoteAssetService.TEXT)
    .subscribe({
      next: data => {this.bodyText = data;},
      error: err => console.error(err)
    })
  }

  ngOnDestroy() {
    this._fileSubscription.unsubscribe();
  }

}
