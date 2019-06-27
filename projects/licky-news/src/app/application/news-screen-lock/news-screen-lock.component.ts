import { Component, OnInit } from '@angular/core';
import { User } from 'lick-data';

@Component({
  selector: 'app-news-screen-lock',
  templateUrl: './news-screen-lock.component.html',
  styleUrls: ['./news-screen-lock.component.css']
})
export class NewsScreenLockComponent implements OnInit {

  public user: User;
  public status : string = "LOCKED";

  constructor() { }

  ngOnInit() {
  }

}
