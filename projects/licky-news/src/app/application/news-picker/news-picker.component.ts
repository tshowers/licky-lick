import { Component, OnInit } from '@angular/core';
import { NewsService, FirebaseDataService, USERS } from 'licky-services';
import { Router } from '@angular/router';
import { User } from 'lick-data';

@Component({
  selector: 'app-news-picker',
  templateUrl: './news-picker.component.html',
  styleUrls: ['./news-picker.component.css']
})
export class NewsPickerComponent implements OnInit {

  menuItems: any[] = [
    {
      "link": "/",
      "name": "Home",
    },
    {
      "link": "/application/news",
      "name": "News",
    },
    {
      "link": "/application/news-selector",
      "name": "News Selector"
    },
    {
      "link": "/application/logout",
      "name": "Log Out"
    },
  ]


  userNewsSources;

  private _user: User;

  constructor(public router: Router, public newsService: NewsService, private _fds: FirebaseDataService) { }

  ngOnInit() {
    this._fds.getDataCollection(USERS).subscribe((data) => {
      console.log("What we get back > " + JSON.stringify(data))
    });
  }

  onNewsSelect(newsSource): void {
    this.newSourcesExist();
    if (this.isThere(newsSource)) {
      console.log("newsSource there delete")
      this.removeNewsSource(newsSource);
    }
    else {
      console.log("newsSource not there")
      this.userNewsSources.push(newsSource);
    }
  }

  isCheckboxes(newsSource): boolean {
    if (this.userNewsSources) {
      let n = this.userNewsSources.newsSources.find((a => a.name == newsSource.name))
      return (n) ? true : false;
    }
    else return false;
  }


  private isThere(newsSource): boolean {
    if (this.userNewsSources) {
      return this.userNewsSources.find((a => a.name == newsSource.name))
    }
    else return false;
  }

  private removeNewsSource(newsSource) {
    let at = this.userNewsSources.findIndex(a => a.name == newsSource.name);
    if (at >= 0) {
      this.deleteNewsSource(at);
    }
  }

  private deleteNewsSource(at: number) {
    this.userNewsSources.splice(at, 1);
  }

  private newSourcesExist() {
    if (!this.userNewsSources)
      this.userNewsSources = [];
  }


}
