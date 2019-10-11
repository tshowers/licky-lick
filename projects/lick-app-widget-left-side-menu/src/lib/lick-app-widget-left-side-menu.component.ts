import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NewsArticle } from 'lick-data';
import { NewsService } from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'licky-lick-app-widget-left-side-menu',
  templateUrl: './lick-app-widget-left-side-menu.component.html',
  styles: []
})
export class LickAppWidgetLeftSideMenuComponent implements OnInit, OnDestroy {

  searchHeading = "...";
  searchPageSize: number = 5;
  searchTotal: number = 0;
  searchResults: NewsArticle[];

  @Input() searchArgument;
  @Input() newsService: NewsService;
  @Input() data: any[];

  private _newsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    if (this.searchArgument)
      this.searchNews();
    else
      this.topNews();
  }

  ngOnDestroy() {
    if (this._newsSubscription)
      this._newsSubscription.unsubscribe();
  }

  searchNews(): void {
    // console.log("Searching news for ", this.searchArgument)
    if (this.newsService)
      this._newsSubscription = this.newsService.getNewsBySearchCriteria(this.searchArgument, 1).subscribe(
        (news) => {
          this.searchResults = news.articles;
          let total = ((news.articles.length === 0) ? 0 : news.totalResults);
          this.searchTotal = total;
          if (total === 0)
            this.searchHeading = "No articles found";
          else
            this.searchHeading = this.searchArgument + " articles";
        })
  }

  topNews(): void {
    this.searchHeading = "Top News";
    if (this.newsService)
      this._newsSubscription = this.newsService.getNewsByCountry("us").subscribe(
        (news) => {
          this.searchResults = news.articles.slice(0, 5);
        }
      )
  }

  onPageEvent(value): void {
    console.log("Something happened " + value)
  }

}
