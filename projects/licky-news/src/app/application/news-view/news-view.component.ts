import { Component, OnInit } from '@angular/core';
import { NewsService, SortHelperService, TypeFindService } from 'licky-services';
import { News, NewsArticle } from 'lick-data';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {

  menuItems: any[] = [
    {
      "link" : "/application/news",
      "name" : "News",
    },
    {
      "link" : "/application/news-selector",
      "name" : "News Selector"
    },
    {
      "link" : "/application/logout",
      "name" : "Log Out"
    },
  ]

  local = "us";

  businessArticles : NewsArticle[] = [];
  entertainmentArticles : NewsArticle[];
  generalArticles : NewsArticle[];
  healthArticles : NewsArticle[];
  scienceArticles : NewsArticle[];
  sportsArticles : NewsArticle[];
  technologyArticles : NewsArticle[];

  categories;

  constructor(private _newsService: NewsService, private _sortHelperService: SortHelperService) { }

  ngOnInit() {
    this.categories = this._newsService.categories;
    this._newsService.setPageSize(4);
    this.setGeneralArticles();
    this.setBusinessArticles();
  }

  private setBusinessArticles() : void {
    let category = this._newsService.BUSINESS;
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.businessArticles = news.articles;
      }
    )
  }

  private setEntertainmentArticles() : void {
    let category = this._newsService.ENTERTAINMENT;
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.entertainmentArticles = news.articles;
      }
    )
  }
  private setGeneralArticles() : void {
    let category = this._newsService.GENERAL;
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.generalArticles = news.articles;
      }
    )
  }
  private setHealthArticles() : void {
    let category = this._newsService.HEALTH;
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.healthArticles = news.articles;
      }
    )
  }
  private setScienceArticles() : void {
    let category = this._newsService.SCIENCE;
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.scienceArticles = news.articles;
      }
    )
  }
  private setSportsArticles() : void {
    let category = this._newsService.SPORTS;
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.sportsArticles = news.articles;
      }
    )
  }
  private setTechnologyArticles() : void {
    let category = this._newsService.TECHNOLOGY;
    this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.technologyArticles = news.articles;
      }
    )
  }

}
