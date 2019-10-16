import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import {filter, map, mergeMap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public constructor(private _activatedRoute: ActivatedRoute, public router: Router, private _titleService: Title, private _wowService: NgwWowService) {  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._activatedRoute),
        map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data))
      .subscribe((event) => {
        this._titleService.setTitle(event['title']);
        this._wowService.init();
      });

  }
}
