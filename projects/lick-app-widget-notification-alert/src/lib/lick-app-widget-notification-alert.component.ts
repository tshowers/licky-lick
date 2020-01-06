import { Component, OnInit, OnDestroy, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Alert, User } from 'lick-data';
import { SortHelperService, LickyLoginService, FirebaseDataService, ALERTS } from 'licky-services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'licky-lick-app-widget-notification-alert',
  templateUrl: './lick-app-widget-notification-alert.component.html',
  styles: []
})
export class LickAppWidgetNotificationAlertComponent implements OnInit, AfterViewInit {

  alerts$: Observable<Alert[]>;
  @Input() loginService: LickyLoginService;
  @Input() db: FirebaseDataService;
  @Input() router: Router;
  @Input() alertLink;
  alertsChecked: boolean = false;
  public user: User;
  notificationSubscription: Subscription;

  constructor(private _sortHelperService: SortHelperService, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.user = this.loginService.getUser();
    this.alerts$ = this.db.getDataCollection(ALERTS)
      .pipe(map((alerts: Alert[]) => {
        if (alerts && alerts.length)
          this.setUpIndicator(alerts);
        else
          this.alertsChecked = true;
        return alerts;
      }))

  }

  ngOnDestroy() {
    if (this.notificationSubscription)
      this.notificationSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this._cd.detectChanges();
  }

  checkingAlerts(): void {
    if (!this.user) return
    this.user.alertsLastCheckedDate = new Date().getTime();
    this.toggleIndicator();
    this.loginService.update();
  }

  private toggleIndicator() {
    this.notificationSubscription = this.alerts$.subscribe((alerts) => {
      this.setUpIndicator(alerts)
    })
  }

  private setUpIndicator(alerts): void {
    this.alertsChecked = true;
    const lastChecked = this.user.alertsLastCheckedDate;
    if (alerts)
      for (let i = 0; i < alerts.length; i++) {
        if (this.isIndicatorNeeded(alerts[i].lastUpdated, lastChecked)) {
          this.alertsChecked = false;
          break;
        }
      }
  }

  private isIndicatorNeeded(value: Date, compareDate: Date): boolean {
    if (!value || !compareDate) return false;
    const lastChecked = new Date(compareDate);
    const messageDate = new Date(value);
    return (messageDate.getTime() > lastChecked.getTime());
  }


}
