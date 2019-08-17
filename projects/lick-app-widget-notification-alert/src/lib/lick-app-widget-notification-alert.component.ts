import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
export class LickAppWidgetNotificationAlertComponent implements OnInit {

  alerts$: Observable<Alert[]>;
  @Input() loginService: LickyLoginService;
  @Input() db: FirebaseDataService;
  @Input() router: Router;
  alertsChecked: boolean = false;
  public user: User;

  constructor(private _sortHelperService: SortHelperService) { }

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

  checkingAlerts(): void {
    if (!this.user) return
    this.user.alertsLastCheckedDate = new Date().getTime();
    this.toggleIndicator();
    this.loginService.update();
  }

  private toggleIndicator() {
    this.alerts$.subscribe((alerts) => {
      this.setUpIndicator(alerts)
    })
  }

  private setUpIndicator(alerts): void {
    this.alertsChecked = true;
    const lastChecked = this.user.alertsLastCheckedDate;
    for (let i = 0; i < alerts.length; i++) {
      if (this.isIndicatorNeeded(alerts[i].lastUpdated, lastChecked)) {
        this.alertsChecked = false;
        break;
      }
    }
  }

  private isIndicatorNeeded(value: Date, compareDate: Date): boolean {
    if (!value || !compareDate) return false;
    let lastChecked = new Date(compareDate);
    let messageDate = new Date(value);
    return (messageDate.getTime() > lastChecked.getTime());
  }


}
