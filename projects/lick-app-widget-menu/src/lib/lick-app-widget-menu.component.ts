import { Component, OnInit, Input, Renderer2, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'lick-data';
import { LickyLoginService, FirebaseDataService } from 'licky-services';
import { LickAppWidgetMenuService } from './lick-app-widget-menu.service';

@Component({
  selector: 'licky-lick-app-widget-menu',
  templateUrl: './lick-app-widget-menu.component.html',
  styles: []
})
export class LickAppWidgetMenuComponent implements OnInit {

  @Input() router: Router;
  @Input() photoURL = "http://via.placeholder.com/32";
  @Input() displayName = "unknown";
  @Input() role = "N/A";
  @Input() emailAddress = "unknown@16ahead.com";
  @Input() userContact: Contact;

  @Input() version: string = "0.3";
  @Input() loggedIn: boolean = false;
  @Input() userName;
  @Input() loginService: LickyLoginService;
  @Input() emailVerified: false;
  @Input() db: FirebaseDataService;
  searchArgument = '';

  leftSidebar: boolean = true;
  rightSidebar: boolean = false;

  @Output() settingsEvent = new EventEmitter();
  @Output() profileEvent = new EventEmitter();


  constructor(private _renderer: Renderer2, private _lickAppWidgetMenuService: LickAppWidgetMenuService) { }

  ngOnInit() {
    setTimeout(() => {
      this.toggleSidebar();
    }, 3000)
  }

  logout() {
    this.router.navigate(['/home']);
    this._lickAppWidgetMenuService.signOut();
    setTimeout(() => { window.location.reload() }, 500);
  }

  toggleRightSidebar(): void {
    if (this.rightSidebar) {
      this._renderer.addClass(document.body, 'aside-menu-hidden');
      this.rightSidebar = false;
    }
    else {
      this._renderer.removeClass(document.body, 'aside-menu-hidden')
      this.rightSidebar = true;
    }
    this.resizeBroadcast();
  }

  toggleSidebar(): void {
    if (this.leftSidebar) {
      this._renderer.addClass(document.body, 'sidebar-hidden');
      this.leftSidebar = false;
    }
    else {
      this._renderer.removeClass(document.body, 'sidebar-hidden')
      this.leftSidebar = true;
    }
    this.resizeBroadcast();
  }

  toggleSidebarMinimized(): void {
    if (this.leftSidebar) {
      this._renderer.addClass(document.body, 'sidebar-mobile-show');
      this.leftSidebar = false;
    }
    else {
      this._renderer.removeClass(document.body, 'sidebar-mobile-show')
      this.leftSidebar = true;
    }
    this.resizeBroadcast();
  }

  onViewProfile() : void {
    this.profileEvent.emit();
  }

  onSettings() : void {
    this.settingsEvent.emit();
  }


  private resizeBroadcast() {
    var timesRun = 0;
    var interval = setInterval(() => {
      timesRun += 1;
      if (timesRun === 5) {
        clearInterval(interval);
      }
      window.dispatchEvent(new Event('resize'));
    }, 62.5);
  }

}
