import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Task, User } from 'lick-data';
import { SortHelperService, LickyLoginService, FirebaseDataService, TASKS } from 'licky-services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'licky-lick-app-widget-notification-task',
  templateUrl: './lick-app-widget-notification-task.component.html',
  styles: []
})
export class LickAppWidgetNotificationTaskComponent implements OnInit {

  tasks$: Observable<Task[]>;
  @Input() db: FirebaseDataService;
  @Input() loginService: LickyLoginService;
  @Input() router: Router;
  private _user: User;
  tasksChecked: boolean = false;
  userSubscription: Subscription;

  constructor(private _sortHelperService: SortHelperService) { }

  ngOnInit() {
    this._user = this.loginService.getUser();
    this.tasks$ = this.db.getDataCollection(TASKS)
      .pipe(map((tasks: Task[]) => {
        if (tasks && tasks.length) {
          this._sortHelperService.sortByLastUpdated(tasks);
          tasks.forEach((task) => {
            let l = this.isPastDate(task.dueDate);
            task.isPastDate = l;
          })
          this.setUpIndicator(tasks);
        }
        else
          this.tasksChecked = true;
        return tasks;
      }))

  }

  ngOnDestroy() {
    if (this.userSubscription)
      this.userSubscription.unsubscribe();
  }

  checkingTasks(): void {
    if (!this._user) return
    this._user.tasksLastCheckedDate = new Date().getTime();
    this.toggleIndicator();
    this.loginService.update();
  }

  isPastDate(value: Date): boolean {
    if (!value) return false;
    let testDate = new Date(value);

    let today = new Date();
    return (testDate < today);
  }

  private toggleIndicator() {
    this.tasks$.subscribe((tasks) => {
      this.setUpIndicator(tasks)
    })
  }

  private setUpIndicator(tasks): void {
    this.tasksChecked = true;
    for (let i = 0; i < tasks.length; i++) {
      if (this.isIndicatorNeeded(tasks[i].lastUpdated, this._user.tasksLastCheckedDate)) {
        this.tasksChecked = false;
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
