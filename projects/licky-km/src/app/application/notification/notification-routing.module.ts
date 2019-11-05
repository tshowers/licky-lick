import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';

import { AlertComponent } from './alert/alert.component';
import { MessageComponent } from './message/message.component';
import { TaskComponent } from './task/task.component';

const routes : Routes = [
  { path: 'tasks', canActivate: [AuthGuard], component: TaskComponent, data : { title: 'Task Notifications'}},
  { path: 'messages', canActivate: [AuthGuard], component: MessageComponent, data: { title: 'Message Notifications', state: 'message notifications' } },
  { path: 'alerts', canActivate: [AuthGuard], component: AlertComponent, data: { title: 'Alert Notifications', state: 'alert notifications' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class NotificationRoutingModule { }
