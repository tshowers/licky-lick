import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from 'lick-data';
import { NewsService } from 'licky-services';

@Component({
  selector: 'licky-lick-app-widget-left-side-menu',
  templateUrl: './lick-app-widget-left-side-menu.component.html',
  styles: []
})
export class LickAppWidgetLeftSideMenuComponent implements OnInit {

  searchHeading = "...";
  searchPageSize: number = 5;
  searchTotal: number = 0;
  searchResults: NewsArticle[];

  @Input() searchArgument;
  @Input() newsService: NewsService

  constructor() { }

  ngOnInit() {
    if (this.searchArgument)
      this.searchNews();
  }

  searchNews(): void {
    console.log("Searching news for ", this.searchArgument)
    this.newsService.getNewsBySearchCriteria(this.searchArgument, 1).subscribe(
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

  onPageEvent(value) : void {
    console.log("Something happened " + value)
  }

}
