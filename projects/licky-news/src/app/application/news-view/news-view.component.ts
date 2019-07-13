import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { NewsService, TypeFindService, LickyLoginService } from 'licky-services';
import { NewsArticle } from 'lick-data';
import { ProviderBox } from 'lick-app-widget-post4';
import { NewsHelperService } from '../services/news-helper.service';
import { Subscription } from 'rxjs';
import { User } from 'lick-data';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit, OnDestroy {

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

  local = "us";
  searchArgument;
  searchHeading = "...";

  searchResults: NewsArticle[];

  businessArticles: NewsArticle[] = [];
  entertainmentArticles: NewsArticle[];
  generalArticles: NewsArticle[];
  healthArticles: NewsArticle[];
  scienceArticles: NewsArticle[];
  sportsArticles: NewsArticle[];
  technologyArticles: NewsArticle[];

  topNews: NewsArticle[];
  featuredNews: NewsArticle[];
  featuredArticle: NewsArticle;

  boxes: ProviderBox[] = [];

  private _userSubscription: Subscription;

  categories;

  constructor(public router: Router, private _loginService: LickyLoginService, private _newsService: NewsService, public typeFindService: TypeFindService, private _newsHelperService: NewsHelperService) { }

  ngOnInit() {
    this.categories = this._newsService.categories.slice(1);
    this._newsService.setPageSize(4);
    this.setTopNewsArticles();
    this.setFeaturedNews();
    this.setBusinessArticles();
    this.setEntertainmentArticles();
    this.setHealthArticles();
    this.setScienceArticles();
    this.setSportsArticles();
    this.setTechnologyArticles();
    this.setDefaultNewsSources();
    this.setGeneralArticles();
  }

  ngOnDestroy() {
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  public onPageEvent(value): void {
    this._newsHelperService.setNewsArticle(value);
    // console.log("Article selected: ", JSON.stringify(value));
    this.router.navigate(['/application/news-reader']);
  }


  onSubmit(): void {
    console.log("Searching on " + this.searchArgument)
    this._newsService.getNewsBySearchCriteria(this.searchArgument).subscribe(
      (news) => {
        console.log(JSON.stringify( news));
        this.searchResults = news.articles;
        this.searchHeading = "Found " + news.articles.length + " of " + news.totalResults + " articles";
      })
  }


  private setDefaultNewsSources(): void {
    this._userSubscription = this._loginService.userChanged.subscribe((user: User) => {
      // console.log("User > ", JSON.stringify(user))
      this.boxes = [];
      if (user && user.newsSources && (user.newsSources.length > 0)) {
        // console.log("**User News Sources")
        this.setUserNewsSources(user);
      } else {
        // console.log("**Defaultr News Sources")
        this.setDefaultMyNews();
      }
    })
  }

  private setUserNewsSources(user: User) : void {
    let newsSources = user.newsSources;
    // console.log("User News Sources", JSON.stringify(newsSources))
    newsSources.forEach((newsSource) => {
      if (newsSource.checked)
        this.setSelectedNewsSources(newsSource.value);
    })
  }

  private setDefaultMyNews() : void {
    this.setSelectedNewsSources(this._newsService.REUTERS);
    this.setSelectedNewsSources(this._newsService.BBC);
    this.setSelectedNewsSources(this._newsService.MTV_NEWS);
    this.setSelectedNewsSources(this._newsService.ESPN);
  }

  private setSelectedNewsSources(source: string): void {
    this._newsService.setPageSize(5);
    this._newsService.getNewsByProvider(source).subscribe(
      (news) => {
        let box = new ProviderBox();
        box.heading = source;
        box.featuredArticle = news.articles[0];
        box.subArticles = news.articles.slice(1);
        this.boxes.push(box);
      }
    )
  }

  private setTopNewsArticles(): void {
    this._newsService.setPageNumber(1);
    this._newsService.getNewsByCountry("us").subscribe(
      (news) => {
        this.topNews = news.articles;
      }
    )
  }

  private setFeaturedNews(): void {
    this._newsService.setPageNumber(2);
    this._newsService.getNewsByCountry("us").subscribe(
      (news) => {
        this.featuredArticle = news.articles[0];
        this.featuredNews = news.articles.slice(1);
      }
    )
  }

  private setBusinessArticles(): void {
    let category = this._newsService.BUSINESS;
    this._newsService.setPageNumber(1);
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.businessArticles = news.articles;
      }
    )
  }

  private setEntertainmentArticles(): void {
    let category = this._newsService.ENTERTAINMENT;
    this._newsService.setPageNumber(1);
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.entertainmentArticles = news.articles;
      }
    )
  }
  private setGeneralArticles(): void {
    let category = this._newsService.GENERAL;
    this._newsService.setPageNumber(3);
    this._newsService.setPageSize(3);
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.generalArticles = news.articles;
      }
    )
  }
  private setHealthArticles(): void {
    let category = this._newsService.HEALTH;
    this._newsService.setPageNumber(1);
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.healthArticles = news.articles;
      }
    )
  }
  private setScienceArticles(): void {
    let category = this._newsService.SCIENCE;
    this._newsService.setPageNumber(1);
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.scienceArticles = news.articles;
      }
    )
  }
  private setSportsArticles(): void {
    let category = this._newsService.SPORTS;
    this._newsService.setPageNumber(1);
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.sportsArticles = news.articles;
      }
    )
  }
  private setTechnologyArticles(): void {
    let category = this._newsService.TECHNOLOGY;
    this._newsService.setPageNumber(1);
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.technologyArticles = news.articles;
      }
    )
  }

}
