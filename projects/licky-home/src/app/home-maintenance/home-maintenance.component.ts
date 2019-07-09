import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-maintenance',
  templateUrl: './home-maintenance.component.html',
  styleUrls: ['./home-maintenance.component.css']
})
export class HomeMaintenanceComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
