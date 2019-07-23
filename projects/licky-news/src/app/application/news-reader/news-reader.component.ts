import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsHelperService } from '../services/news-helper.service';

@Component({
  selector: 'app-news-reader',
  templateUrl: './news-reader.component.html',
  styleUrls: ['./news-reader.component.css']
})
export class NewsReaderComponent implements OnInit {

  public articleObject;

  constructor(public router: Router, private _newsHelperService: NewsHelperService) { }

  ngOnInit() {
    this.articleObject = this._newsHelperService.getNewsArticle();
    console.log("Article:" + JSON.stringify(this.articleObject));
  }

  public onPageEvent(value): void {
    let theLink: string = (value.link) ? value.link : value.article.url;
    // console.log("**Article Link >", theLink);
    if (theLink && theLink.indexOf("http") >= 0) {
      window.open(theLink, '_blank');
    }
    else
      this.router.navigate([theLink]);
  }

}
