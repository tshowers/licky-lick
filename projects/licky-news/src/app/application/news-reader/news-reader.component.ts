import { Component, OnInit } from '@angular/core';
import { NewsHelperService} from '../services/news-helper.service';

@Component({
  selector: 'app-news-reader',
  templateUrl: './news-reader.component.html',
  styleUrls: ['./news-reader.component.css']
})
export class NewsReaderComponent implements OnInit {

  public articleObject;

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


  constructor(private _newsHelperService: NewsHelperService) { }

  ngOnInit() {
    this.articleObject = this._newsHelperService.getNewsArticle();
    console.log("Article:" + this.articleObject);
  }

}
