import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { NewsService, TypeFindService, LickyLoginService, YoutubeService } from 'licky-services';
import { NewsArticle, User } from 'lick-data';
import { ProviderBox } from 'lick-app-widget-post4';
import { NewsHelperService } from '../services/news-helper.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit, OnDestroy {

  local = "us";
  searchArgument;
  searchHeading = "...";
  currentPage: number = 1;
  searchPageSize: number = 20;
  searchTotal: number = 0;

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

  videos: any[];

  private _newsSearchSubscription: Subscription;
  private _newsProviderSubscription: Subscription;
  private _newsCountrySubscription: Subscription;
  private _newsCategorySubscription1: Subscription;
  private _newsCategorySubscription2: Subscription;
  private _newsCategorySubscription3: Subscription;
  private _newsCategorySubscription4: Subscription;
  private _newsCategorySubscription5: Subscription;
  private _newsCategorySubscription6: Subscription;
  private _youTubeSubscription: Subscription;

  private _channels = [
    { 'name': 'VICE News', 'value': 'UCZaT_X_mc0BI-djXOlfhqWQ' },
    { 'name': 'CBS NEWS', 'value': 'UC8p1vwvWtl6T73JiExfWs1g' },
    { 'name': 'USA TODAY', 'value': 'UCP6HGa63sBC7-KHtkme-p-g' },
    { 'name': 'ESPN', 'value': 'UCiWLfSweyRNmLpgEHekhoAg' },
    { 'name': 'Weather Channel', 'value': 'UC1MHKUuSiXsS1qZLL7h16BQ' },
    { 'name': 'Vogue', 'value': 'UCRXiA3h1no_PFkb1JCP0yMA' },
    { 'name': 'W', 'value': 'UCB_TGajnJymiSmu6zWkjW2Q' },
    { 'name': 'Vanity Fair', 'value': 'UCIsbLox_y9dCIMLd8tdC6qg' },
    { 'name': 'The New Yorker', 'value': 'UCsD-Qms-AkXDrsU962OicLw' },
    { 'name': 'Epicurious', 'value': 'UCcjhYlL1WRBjKaJsMH_h7Lg' },
    { 'name': 'Architectural Digest', 'value': 'UC0k238zFx-Z8xFH0sxCrPJg' },
    { 'name': 'CNN', 'value': 'UCupvZG-5ko_eiXAupbDfxWw' },
    { 'name': 'CNET', 'value': 'UCOmcA3f_RrH6b9NmcNa4tdg' },
    { 'name': 'Democracy Now!', 'value': 'UCzuqE7-t13O4NIDYJfakrhw' },
    { 'name': 'The Root', 'value': 'UCg5bOg1qVoZ2JDJ7MmjY63A' },
    { 'name': 'Vox', 'value': 'UCLXo7UDZvByw2ixzpQCufnA' },
    { 'name': 'The Verge', 'value': 'UCddiUEpeqJcYeBxX1IVBKvQ' },
    { 'name': 'PBS', 'value': 'UC6ZFN9Tx6xh-skXCuRHCDpQ' },
    { 'name': 'Time', 'value': 'UC8Su5vZCXWRag13H53zWVwA' },
    { 'name': 'The Wall Street Journal', 'value': 'UCK7tptUDHh-RYDsdxO1-5QQ' },
    { 'name': 'Washington Post', 'value': 'UCHd62-u_v4DvJ8TCFtpi4GA' },
    { 'name': 'MSNBC', 'value': 'UCaXkIU1QidjPwiAYu6GcHjg' },
    { 'name': 'BLOOMBERG', 'value': 'UCIALMKvObZNtJ6AmdCLP7Lg' }
  ];

  private _userSubscription: Subscription;
  private _unsubscribe$: Subject<any> = new Subject();
  private _user: User;

  categories;

  constructor(
    public router: Router,
    public typeFindService: TypeFindService,
    private _youTubeService: YoutubeService,
    private _loginService: LickyLoginService,
    private _newsService: NewsService,
    private _newsHelperService: NewsHelperService) { }

  ngOnInit() {
    this.setUser();
    this.categories = this._newsService.categories.slice(1);
    this._newsService.setPageSize(4);
    this.setTopNewsArticles();
    this.setBusinessArticles();
    this.setEntertainmentArticles();
    this.setHealthArticles();
    this.setScienceArticles();
    this.setSportsArticles();
    this.setTechnologyArticles();
    this.setDefaultNewsSources();
    this.setVideos();
  }

  ngOnDestroy() {
    this._userSubscription.unsubscribe();
    if (this._newsSearchSubscription)
      this._newsSearchSubscription.unsubscribe();
    if (this._newsProviderSubscription)
      this._newsProviderSubscription.unsubscribe();
    if (this._newsCountrySubscription)
      this._newsCountrySubscription.unsubscribe();
    if (this._newsCategorySubscription1)
      this._newsCategorySubscription1.unsubscribe();
    if (this._newsCategorySubscription2)
      this._newsCategorySubscription2.unsubscribe();
    if (this._newsCategorySubscription3)
      this._newsCategorySubscription3.unsubscribe();
    if (this._newsCategorySubscription4)
      this._newsCategorySubscription4.unsubscribe();
    if (this._newsCategorySubscription5)
      this._newsCategorySubscription5.unsubscribe();
    if (this._newsCategorySubscription6)
      this._newsCategorySubscription6.unsubscribe();
    if (this._youTubeSubscription)
      this._youTubeSubscription.unsubscribe();
  }

  private setUser(): void {
    this._user = this._loginService.getUser();
    this._userSubscription = this._loginService.userChanged.subscribe((user: User) => {
      this._user = user;
      this.boxes.length = 0;
      this.setUserNewsSources();
    })
  }

  public onPageChange(value): void {
    this.currentPage = value;
    this.onSubmit();
  }

  public onPageEvent(value): void {
    this._newsHelperService.setNewsArticle(value);
    this.router.navigate(['/application/news-reader']);
  }

  onKey(value: string) {
    if (!value || (value === ''))
      this.searchResults = null;
  }

  onSubmit(): void {
    this._newsSearchSubscription = this._newsService.getNewsBySearchCriteria(this.searchArgument, this.currentPage).subscribe(
      (news) => {
        this.searchResults = news.articles;
        let total = ((news.articles.length === 0) ? 0 : news.totalResults);
        this.searchTotal = total;
        if (total === 0)
          this.searchHeading = "No articles found";
        else
          this.searchHeading = "Found " + news.articles.length + " of " + total + " articles";
      })
  }


  private setDefaultNewsSources(): void {
    if (this._user && this._user.newsSources && (this._user.newsSources.length > 0))
      this.setUserNewsSources();
    else
      this.setDefaultMyNews();
  }

  private setUserNewsSources(): void {
    let newsSources = this._user.newsSources;
    if (newsSources) {
      newsSources.forEach((newsSource) => {
        if (newsSource.checked)
          this.setSelectedNewsSources(newsSource.value);
      })
    }
  }

  private setDefaultMyNews(): void {
    this.setSelectedNewsSources(this._newsService.REUTERS);
    this.setSelectedNewsSources(this._newsService.BBC);
    this.setSelectedNewsSources(this._newsService.MTV_NEWS);
    this.setSelectedNewsSources(this._newsService.ESPN);
  }

  private setSelectedNewsSources(source: string): void {
    this._newsService.setPageSize(5);
    this._newsProviderSubscription = this._newsService.getNewsByProvider(source).subscribe(
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
    this._newsService.setPageSize(20);
    this._newsCountrySubscription = this._newsService.getNewsByCountry("us").subscribe(
      (news) => {
        this.topNews = news.articles.slice(0, 10);
        this.featuredArticle = news.articles[10];
        this.featuredNews = news.articles.slice(11, 14);
        this.generalArticles = news.articles.slice(14, 20);
      }
    )
  }

  private setBusinessArticles(): void {
    let category = this._newsService.BUSINESS;
    this._newsService.setPageSize(4);
    this._newsService.setPageNumber(1);
    this._newsCategorySubscription1 = this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.businessArticles = news.articles;
      }
    )
  }

  private setEntertainmentArticles(): void {
    let category = this._newsService.ENTERTAINMENT;
    this._newsService.setPageSize(4);
    this._newsService.setPageNumber(1);
    this._newsCategorySubscription2 = this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.entertainmentArticles = news.articles;
      }
    )
  }
  private setHealthArticles(): void {
    let category = this._newsService.HEALTH;
    this._newsService.setPageNumber(1);
    this._newsService.setPageSize(4);
    this._newsCategorySubscription3 = this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.healthArticles = news.articles;
      }
    )
  }
  private setScienceArticles(): void {
    let category = this._newsService.SCIENCE;
    this._newsService.setPageSize(4);
    this._newsService.setPageNumber(1);
    this._newsCategorySubscription4 = this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.scienceArticles = news.articles;
      }
    )
  }
  private setSportsArticles(): void {
    let category = this._newsService.SPORTS;
    this._newsService.setPageSize(4);
    this._newsService.setPageNumber(1);
    this._newsCategorySubscription5 = this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.sportsArticles = news.articles;
      }
    )
  }
  private setTechnologyArticles(): void {
    let category = this._newsService.TECHNOLOGY;
    this._newsService.setPageSize(4);
    this._newsService.setPageNumber(1);
    this._newsCategorySubscription6 = this._newsService.getNewsByCategory(category).subscribe(
      (news) => {
        this.technologyArticles = news.articles;
      }
    )
  }

  private setVideos(): void {
    this.videos = [];
    this._youTubeSubscription = this._youTubeService.getVideosForChannel(this.getChannel(), 5)
      .pipe(takeUntil(this._unsubscribe$)).subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
      })
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private getChannel(): string {
    let x = this.getRandomInt(this._channels.length);
    return this._channels[x].value;
  }

}
