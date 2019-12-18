import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-context-nav',
  templateUrl: './context-nav.component.html',
  styleUrls: ['./context-nav.component.css']
})
export class ContextNavComponent implements OnInit {

  @Input() store;
  @Input() catalog;
  @Input() context;

  constructor() { }

  ngOnInit() {
  }

}
