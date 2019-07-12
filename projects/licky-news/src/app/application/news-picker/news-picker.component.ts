import { Component, OnInit } from '@angular/core';
import { NewsService, LickyLoginService } from 'licky-services';
import { Router } from '@angular/router';

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


  newsSources;


  constructor(public router: Router,
    public newsService: NewsService,
    private _loginSerive: LickyLoginService) { }

  ngOnInit() {
    this.newSourcesExist();
  }

  onNewsSelect(newsSource): void {
    // console.log("Current Value:", JSON.stringify(newsSource));
    newsSource.checked = (!newsSource.checked);
    // console.log("New Value:", JSON.stringify(newsSource));
  }


  private newSourcesExist() {
    if (this._loginSerive.getUser().newsSources && (this._loginSerive.getUser().newsSources.length > 0))
      this.newsSources = this._loginSerive.getUser().newsSources;
    else
      this.newsSources = this.newsService.newsSources;
  }

  onSubmit(): void {
    // console.log("NewsSources: ", JSON.stringify(this.newsSources));
    this._loginSerive.getUser().newsSources = this.newsSources;
    // console.log("User NewsSources: ", JSON.stringify(this._loginSerive.getUser().newsSources));
    this._loginSerive.update();
    this.router.navigate(['/application/news']);
  }


}
