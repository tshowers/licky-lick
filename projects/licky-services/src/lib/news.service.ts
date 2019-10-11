import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { merge } from 'rxjs';

@Injectable()
export class NewsService {

  private NEWS_KEY: string = "8edae266107643bd847972bb713a67bb";

  public ABC = "abc-news";
  public AL_JAZEERA = "al-jazeera-english";
  public ASSOCIATED_PRESS = "associated-press";
  public AXIOS = "axios";
  public BBC = "bbc-news";
  public BBC_SPORT = "bbc-sport";
  public BLASTING_NEWS = "blasting-news-br";
  public BLEACHER_REPORT = "bleacher-report";
  public BLOOMBERG = "bloomberg";
  public BUSINESS_INSIDER = "business-insider";
  public BUZZFEED = "buzzfeed";
  public CBC_NEWS = "cbc-news";
  public CBS_NEWS = "cbs-news";
  public CNBC = "cnbc";
  public CNN = "cnn";
  public DAILY_MAIL = "daily-mail";
  public ENDGADGET = "endgadget";
  public ENTERTAINMENT_WEEKLY = "entertainment-weekly";
  public ESPN = "espn";
  public FINANCIAL_POST = "financial-post";
  public FINANCIAL_TiMES = "financial-times";
  public FORTUNE = "fortune";
  public FOX_SPORTS = "fox-sports";
  public GOOGLE_NEWS = "google-news";
  public GOOGLE_NEWS_ARGENTINA = "google-news-ar";
  public GOOGLE_NEWS_AUSTRALIA = "google-news-au";
  public GOOGLE_NEWS_BRASIL = "google-news-br";
  public GOOGLE_NEWS_CANADA = "google-news-ca";
  public GOOGLE_NEWS_FRANCE = "google-news-fr";
  public GOOGLE_NEWS_INDIA = "google-news-in";
  public GOOGLE_NEWS_ISRAEL = "google-news-is";
  public GOOGLE_NEWS_ITALY = "google-news-it";
  public GOOGLE_NEWS_RUSSIA = "google-news-ru";
  public GOOGLE_NEWS_SAUDI_ARABIA = "google-news-sa";
  public GOOGLE_NEWS_UK = "google-news-uk";
  public HACKER_NEWS = "hacker-news";
  public IGN = "ign";
  public INDEPENDENT = "independent";
  public MASHABLE = "mashable";
  public MEDICAL_NEWS_TODAY = "medical-news-today";
  public METRO = "metro";
  public MSNBC = "msnbc";
  public MTV_NEWS = "mtv-news";
  public NATIONAL_GEOGRAPHIC = "national-geographic";
  public NBC_NEWS = "nbc-news";
  public NEWS_COM_AU = "news-com-au";
  public NEWSWEEK = "newsweek";
  public NEW_YORK_MAGAZINE = "new-york-magazine";
  public NFL_NEWS = "nfl-news";
  public NRK = "nrk";
  public POLITICO = "politico";
  public RECODE = "recode";
  public REDDIT_R_ALL = "reddit-r-all";
  public REUTERS = "reuters";
  public RT = "rt";
  public TECHCRUNCH = "techcrunch";
  public TECHRADAR = "techradar";
  public THE_ECONOMIST = "the-economist";
  public THE_GUARDIAN_UK = "the-guardian-uk";
  public THE_HILL = "the-hill";
  public THE_NEW_YORK_TIMES = "the-new-york-times";
  public THE_HUFFINGTON_POST = "the-huffington-post";
  public THE_IRISH_TIMES = "the-irish-times";
  public THE_NEXT_WEB = "the-next-web";
  public THE_TELEGRAPH = "the-telegraph";
  public THE_TIMES_OF_INDIA = "the-times-of-india";
  public THE_VERGE = "the-verge";
  public THE_WALL_STREET_JOURNAL = "the-wall-street-journal";
  public THE_WASHINGTON_POST = "the-washington-post";
  public TIME = "time";
  public USA_TODAY = "usa-today";
  public VICE_NEWS = "vice-news";
  public WIRED = "wired";
  public YNET = "ynet";

  public BUSINESS = "business";
  public ENTERTAINMENT = "entertainment";
  public GENERAL = "general";
  public HEALTH = "health";
  public SCIENCE = "science";
  public SPORTS = "sports";
  public TECHNOLOGY = "technology";

  public aggregatedNews = []

  public categories = [
    { "name": "all" },
    { "name": "business" },
    { "name": "entertainment" },
    { "name": "health" },
    { "name": "science" },
    { "name": "sports" },
    { "name": "technology" }
  ]

  public newsSources = [
    { "name": "ABC", "value": this.ABC, "checked": false },
    { "name": "AL JAZEERA", "value": this.AL_JAZEERA, "checked": false },
    { "name": "ASSOCIATED PRESS", "value": this.ASSOCIATED_PRESS, "checked": false },
    { "name": "AXIOS", "value": this.AXIOS, "checked": false },
    { "name": "BBC", "value": this.BBC, "checked": false },
    { "name": "BBC SPORT", "value": this.BBC_SPORT, "checked": false },
    { "name": "BLASTING NEWS (BR)", "value": this.BLASTING_NEWS, "checked": false },
    { "name": "BLEACHER REPORT", "value": this.BLEACHER_REPORT, "checked": false },
    { "name": "BLOOMBERG", "value": this.BLOOMBERG, "checked": false },
    { "name": "BUSINESS INSIDER", "value": this.BUSINESS_INSIDER, "checked": false },
    { "name": "BUZZFEED", "value": this.BUZZFEED, "checked": false },
    { "name": "CBC NEWS", "value": this.CBC_NEWS, "checked": false },
    { "name": "CBS NEWS", "value": this.CBS_NEWS, "checked": false },
    { "name": "CNBC", "value": this.CNBC, "checked": false },
    { "name": "CNN", "value": this.CNN, "checked": false },
    { "name": "DAILY MAIL", "value": this.DAILY_MAIL, "checked": false },
    { "name": "ENDGADGET", "value": this.ENDGADGET, "checked": false },
    { "name": "ENTERTAINMENT", "value": this.ENTERTAINMENT, "checked": false },
    { "name": "ESPN", "value": this.ESPN, "checked": false },
    { "name": "FINANCIAL POST", "value": this.FINANCIAL_POST, "checked": false },
    { "name": "FINANCIAL TiMES", "value": this.FINANCIAL_TiMES, "checked": false },
    { "name": "FORTUNE", "value": this.FORTUNE, "checked": false },
    { "name": "FOX SPORTS", "value": this.FOX_SPORTS, "checked": false },
    { "name": "GOOGLE NEWS", "value": this.GOOGLE_NEWS, "checked": false },
    { "name": "GOOGLE NEWS ARGENTINA", "value": this.GOOGLE_NEWS_ARGENTINA, "checked": false },
    { "name": "GOOGLE NEWS AUSTRALIA", "value": this.GOOGLE_NEWS_AUSTRALIA, "checked": false },
    { "name": "GOOGLE NEWS BRASIL", "value": this.GOOGLE_NEWS_BRASIL, "checked": false },
    { "name": "GOOGLE NEWS CANADA", "value": this.GOOGLE_NEWS_CANADA, "checked": false },
    { "name": "GOOGLE NEWS FRANCE", "value": this.GOOGLE_NEWS_FRANCE, "checked": false },
    { "name": "GOOGLE NEWS INDIA", "value": this.GOOGLE_NEWS_INDIA, "checked": false },
    { "name": "GOOGLE NEWS ISRAEL", "value": this.GOOGLE_NEWS_ISRAEL, "checked": false },
    { "name": "GOOGLE NEWS ITALY", "value": this.GOOGLE_NEWS_ITALY, "checked": false },
    { "name": "GOOGLE NEWS RUSSIA", "value": this.GOOGLE_NEWS_RUSSIA, "checked": false },
    { "name": "GOOGLE NEWS SAUDI ARABIA", "value": this.GOOGLE_NEWS_SAUDI_ARABIA, "checked": false },
    { "name": "GOOGLE NEWS UK", "value": this.GOOGLE_NEWS_UK, "checked": false },
    { "name": "HACKER NEWS", "value": this.HACKER_NEWS, "checked": false },
    { "name": "IGN", "value": this.IGN, "checked": false },
    { "name": "INDEPENDENT", "value": this.INDEPENDENT, "checked": false },
    { "name": "MASHABLE", "value": this.MASHABLE, "checked": false },
    { "name": "MEDICAL NEWS TODAY", "value": this.MEDICAL_NEWS_TODAY, "checked": false },
    { "name": "METRO", "value": this.METRO, "checked": false },
    { "name": "MSNBC", "value": this.MSNBC, "checked": false },
    { "name": "MTV NEWS", "value": this.MTV_NEWS, "checked": false },
    { "name": "NATIONAL GEOGRAPHIC", "value": this.NATIONAL_GEOGRAPHIC, "checked": false },
    { "name": "NBC NEWS", "value": this.NBC_NEWS, "checked": false },
    { "name": "NEWS COM AU", "value": this.NEWS_COM_AU, "checked": false },
    { "name": "NEWSWEEK", "value": this.NEWSWEEK, "checked": false },
    { "name": "NEW YORK MAGAZINE", "value": this.NEW_YORK_MAGAZINE, "checked": false },
    { "name": "NFL NEWS", "value": this.NFL_NEWS, "checked": false },
    { "name": "NRK", "value": this.NRK, "checked": false },
    { "name": "POLITICO", "value": this.POLITICO, "checked": false },
    { "name": "RECODE", "value": this.RECODE, "checked": false },
    { "name": "REDDIT/R/ALL", "value": this.REDDIT_R_ALL, "checked": false },
    { "name": "REUTERS", "value": this.REUTERS, "checked": false },
    { "name": "RT", "value": this.RT, "checked": false },
    { "name": "TECHCRUNCH", "value": this.BBC, "checked": false },
    { "name": "TECHRADAR", "value": this.TECHRADAR, "checked": false },
    { "name": "THE ECONOMIST", "value": this.THE_ECONOMIST, "checked": false },
    { "name": "THE GUARDIAN_UK", "value": this.THE_GUARDIAN_UK, "checked": false },
    { "name": "THE HILL", "value": this.THE_HILL, "checked": false },
    { "name": "THE NEW YORK TIMES", "value": this.THE_NEW_YORK_TIMES, "checked": false },
    { "name": "THE HUFFINGTON POST", "value": this.THE_HUFFINGTON_POST, "checked": false },
    { "name": "THE IRISH TIMES", "value": this.THE_IRISH_TIMES, "checked": false },
    { "name": "THE NEXT WEB", "value": this.BBC, "checked": false },
    { "name": "THE TELEGRAPH", "value": this.THE_TELEGRAPH, "checked": false },
    { "name": "THE TIMES OF INDIA", "value": this.THE_TIMES_OF_INDIA, "checked": false },
    { "name": "THE VERGE", "value": this.THE_VERGE, "checked": false },
    { "name": "THE WALL STREET JOURNAL", "value": this.THE_WALL_STREET_JOURNAL, "checked": false },
    { "name": "THE WASHINGTON POST", "value": this.THE_WASHINGTON_POST, "checked": false },
    { "name": "TIME", "value": this.TIME, "checked": false },
    { "name": "USA TODAY", "value": this.USA_TODAY, "checked": false },
    { "name": "VICE NEWS", "value": this.VICE_NEWS, "checked": false },
    { "name": "WIRED", "value": this.WIRED, "checked": false },
    { "name": "YNET", "value": this.YNET, "checked": false },
  ];

  private _pageSize: number = 5;
  private _pageNumber: number = 1;
  private _country = "us";
  private _lang = "en";
  private _sortParam = "popularity";
  private _key = '&apiKey=' + this.NEWS_KEY;
  private _pageSizeParam = '&pageSize=';
  private _searchCriteria = '&sortBy=';
  private _local = "&country=";
  private _language = "&language=";
  private _pageNumberParam = "&page=";

  private _categoryURL = 'https://newsapi.org/v2/top-headlines?category=';

  private _topHeadlinesByCountry = 'https://newsapi.org/v2/top-headlines?country=';

  private _sourcesURL1 = 'https://newsapi.org/v2/top-headlines?sources=';

  private _searchURL = 'https://newsapi.org/v2/everything?q=';


  constructor(private _http: HttpClient) { }

  getNewsByCountry(country: string): Observable<any> {
    return this._http.get(this._topHeadlinesByCountry + country + this._key + this._pageSizeParam + this._pageSize + this._pageNumberParam + this._pageNumber, { responseType: 'json' });
  }

  getNewsByCategory(category: string): Observable<any> {
    return this._http.get(this._categoryURL + category + this._local + this._country + this._key + this._pageSizeParam + this._pageSize + this._pageNumberParam + this._pageNumber, { responseType: 'json' });
  }

  getNewsByProvider(provider: string): Observable<any> {
    return this._http.get(this._sourcesURL1 + provider + this._key + this._language + this._lang + this._pageSizeParam + this._pageSize, { responseType: 'json' });
  }

  getNewsBySearchCriteria(argument: string, currentPage? : number): Observable<any> {
    return this._http.get(this._searchURL + "\"" + encodeURI(argument) + "\"" + this._searchCriteria + this._sortParam + this._language + this._lang + this._pageNumberParam + ((currentPage) ? currentPage : this._pageNumber) + this._key, { responseType: 'json' });
  }

  getNewsByProviders(): Observable<any> {
    let newsObservable: Observable<any>[] = [];
    for (let i = 0; i < this.aggregatedNews.length; i++) {
      newsObservable.push(this.addNews(this.aggregatedNews[i]))
    }

    return merge(newsObservable)
  }

  addNews(provider: string): Observable<any> {
    let url = this._sourcesURL1 + provider + this._local + this._country + this._key
    return this._http.get(url, { responseType: 'json' })
  }

  setPageSize(size: number): void {
    this._pageSize = size;
  }

  setCountry(countryCode: string): void {
    this._country = countryCode;
  }

  setLanguage(languageCode: string): void {
    this._lang = languageCode;
  }

  setSortParam(sortParam: string): void {
    this._sortParam = sortParam;
  }

  setPageNumber(pageNumber: number): void {
    this._pageNumber = pageNumber;
  }

}
