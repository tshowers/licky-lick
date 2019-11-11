import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NotificationRoutingModule } from './notification-routing.module';
import { AlertComponent } from './alert/alert.component';
import { MessageComponent } from './message/message.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [AlertComponent, MessageComponent, TaskComponent],
  imports: [
    CommonModule,
    SharedModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
