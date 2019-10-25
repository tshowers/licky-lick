import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { FirebaseDataService, LickyLoginService, ARTICLES } from 'licky-services';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Article } from 'lick-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  articles$: Observable<any[]>;

  pageSize = 5;

  currentPage = 1;

  totalRecords = 0;

  private _articles: Article[];

  private _articlesOriginal: Article[];

  private _articleSubscription: Subscription;

  menuItems: any[] = [
    {
      "link" : "/",
      "name" : "Home",
    },
    {
      "link" : "/blog",
      "name" : "Blog",
    },
    {
      "link" : "/terms",
      "name" : "Terms"
    },
    {
      "link" : "/privacy",
      "name" : "Privacy"
    },
  ];


  constructor(private _lickyLoginService: LickyLoginService, public db: FirebaseDataService) { }

  ngOnInit() {
    this.doArticles();
  }

  ngOnDestroy() {
    if (this._articleSubscription)
      this._articleSubscription.unsubscribe();
  }

  doArticles() : void {
    this._articleSubscription = this.db.getDataCollection(ARTICLES)
      .subscribe((articles: Article[]) => {
        // console.log("doArticles()", JSON.stringify(articles))
        if (articles) {
          this.totalRecords = articles.length;
          this._articles = this.db.getListToArray(articles);
          this.newPage(this.currentPage);
        }
      });
  }

  newPage(value): void {
    this.currentPage = value;
    this.articles$ = Observable.create((observer) => {
      observer.next(this.db.getRecordsToDisplay(value, this.pageSize, this._articles));
      observer.complete();
    })
  }



}
