import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'lick-data';


@Component({
  selector: 'licky-lick-app-widget-list-task',
  templateUrl: './lick-app-widget-list-task.component.html',
  styles: []
})
export class LickAppWidgetListTaskComponent implements OnInit {

  @Input() tasks : Task[] = [];
  @Input() headingText = "Task List";
  @Input() taskCount;

  constructor() { }

  ngOnInit() {
  }

}
