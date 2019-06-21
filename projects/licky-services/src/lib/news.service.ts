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
  public ENTERTAINMENT = "entertainment-weekly";
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

  public aggregatedNews = []

  public newsSources = [
    { "name": "ABC", "value": this.ABC },
    { "name": "AL JAZEERA", "value": this.AL_JAZEERA },
    { "name": "ASSOCIATED PRESS", "value": this.ASSOCIATED_PRESS },
    { "name": "AXIOS", "value": this.AXIOS },
    { "name": "BBC", "value": this.BBC },
    { "name": "BLEACHER REPORT", "value": this.BLEACHER_REPORT },
    { "name": "BLOOMBERG", "value": this.BLOOMBERG },
    { "name": "BUSINESS INSIDER", "value": this.BUSINESS_INSIDER },
    { "name": "BUZZFEED", "value": this.BUZZFEED },
    { "name": "CBC NEWS", "value": this.CBC_NEWS },
    { "name": "CBS NEWS", "value": this.CBS_NEWS },
    { "name": "CNBC", "value": this.CNBC },
    { "name": "CNN", "value": this.CNN },
    { "name": "DAILY MAIL", "value": this.DAILY_MAIL },
    { "name": "ENDGADGET", "value": this.ENDGADGET },
    { "name": "ENTERTAINMENT", "value": this.ENTERTAINMENT },
    { "name": "ESPN", "value": this.ESPN },
    { "name": "FINANCIAL POST", "value": this.FINANCIAL_POST },
    { "name": "FINANCIAL TiMES", "value": this.FINANCIAL_TiMES },
    { "name": "FORTUNE", "value": this.FORTUNE },
    { "name": "FOX SPORTS", "value": this.FOX_SPORTS },
    { "name": "GOOGLE NEWS", "value": this.GOOGLE_NEWS },
    { "name": "GOOGLE NEWS ARGENTINA", "value": this.GOOGLE_NEWS_ARGENTINA },
    { "name": "GOOGLE NEWS AUSTRALIA", "value": this.GOOGLE_NEWS_AUSTRALIA },
    { "name": "GOOGLE NEWS BRASIL", "value": this.GOOGLE_NEWS_BRASIL },
    { "name": "GOOGLE NEWS CANADA", "value": this.GOOGLE_NEWS_CANADA },
    { "name": "GOOGLE NEWS FRANCE", "value": this.GOOGLE_NEWS_FRANCE },
    { "name": "GOOGLE NEWS INDIA", "value": this.GOOGLE_NEWS_INDIA },
    { "name": "GOOGLE NEWS ISRAEL", "value": this.GOOGLE_NEWS_ISRAEL },
    { "name": "GOOGLE NEWS ITALY", "value": this.GOOGLE_NEWS_ITALY },
    { "name": "GOOGLE NEWS RUSSIA", "value": this.GOOGLE_NEWS_RUSSIA },
    { "name": "GOOGLE NEWS SAUDI ARABIA", "value": this.GOOGLE_NEWS_SAUDI_ARABIA },
    { "name": "GOOGLE NEWS UK", "value": this.GOOGLE_NEWS_UK },
    { "name": "HACKER NEWS", "value": this.HACKER_NEWS },
    { "name": "IGN", "value": this.IGN },
    { "name": "INDEPENDENT", "value": this.INDEPENDENT },
    { "name": "MASHABLE", "value": this.MASHABLE },
    { "name": "METRO", "value": this.METRO },
    { "name": "MSNBC", "value": this.MSNBC },
    { "name": "MTV NEWS", "value": this.MTV_NEWS },
    { "name": "NATIONAL GEOGRAPHIC", "value": this.NATIONAL_GEOGRAPHIC },
    { "name": "NBC NEWS", "value": this.NBC_NEWS },
    { "name": "NEWS COM AU", "value": this.NEWS_COM_AU },
    { "name": "NEWSWEEK", "value": this.NEWSWEEK },
    { "name": "NEW YORK MAGAZINE", "value": this.NEW_YORK_MAGAZINE },
    { "name": "NFL NEWS", "value": this.NFL_NEWS },
    { "name": "NRK", "value": this.NRK },
    { "name": "POLITICO", "value": this.POLITICO },
    { "name": "RECODE", "value": this.RECODE },
    { "name": "REDDIT/R/ALL", "value": this.REDDIT_R_ALL },
    { "name": "REUTERS", "value": this.REUTERS },
    { "name": "RT", "value": this.RT },
    { "name": "TECHCRUNCH", "value": this.BBC },
    { "name": "TECHRADAR", "value": this.TECHRADAR },
    { "name": "THE ECONOMIST", "value": this.THE_ECONOMIST },
    { "name": "THE GUARDIAN_UK", "value": this.THE_GUARDIAN_UK },
    { "name": "THE HILL", "value": this.THE_HILL },
    { "name": "THE NEW YORK TIMES", "value": this.THE_NEW_YORK_TIMES },
    { "name": "THE HUFFINGTON POST", "value": this.THE_HUFFINGTON_POST },
    { "name": "THE IRISH TIMES", "value": this.THE_IRISH_TIMES },
    { "name": "THE NEXT WEB", "value": this.BBC },
    { "name": "THE TELEGRAPH", "value": this.THE_TELEGRAPH },
    { "name": "THE TIMES OF INDIA", "value": this.THE_TIMES_OF_INDIA },
    { "name": "THE VERGE", "value": this.THE_VERGE },
    { "name": "THE WALL STREET JOURNAL", "value": this.THE_WALL_STREET_JOURNAL },
    { "name": "THE WASHINGTON POST", "value": this.THE_WASHINGTON_POST },
    { "name": "TIME", "value": this.TIME },
    { "name": "USA TODAY", "value": this.USA_TODAY },
    { "name": "VICE NEWS", "value": this.VICE_NEWS },
    { "name": "WIRED", "value": this.WIRED },
    { "name": "YNET", "value": this.YNET },
  ];


  private _bbcURL = 'https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=' + this.NEWS_KEY;

  private _newsURL1 = 'https://newsapi.org/v2/top-headlines?' +
    'sources=';

  private _newsURL2 = '&apiKey=8edae266107643bd847972bb713a67bb';

  private _searchURL1 = 'https://newsapi.org/v2/everything?q=';

  private _searchURL2 = '&from=2017-12-22&' +
    'sortBy=popularity&' +
    'apiKey=8edae266107643bd847972bb713a67bb';

  constructor(private _http: HttpClient) { }

  getBBC(): Observable<any> {
    return this._http.get(this._bbcURL, { responseType: 'json' })
  }

  getNewsByProvider(provider: string): Observable<any> {
    return this._http.get(this._newsURL1 + provider + this._newsURL2, { responseType: 'json' })
  }

  getNewsBySearchCriteria(argument: string): Observable<any> {
    return this._http.get(this._searchURL1 + "\"" + encodeURI(argument) + "\"" + this._searchURL2, { responseType: 'json' })
  }

  getNewsByProviders(): Observable<any> {
    let newsObservable: Observable<any>[] = [];
    for (let i = 0; i < this.aggregatedNews.length; i++) {
      newsObservable.push(this.addNews(this.aggregatedNews[i]))
    }

    return merge(newsObservable)
  }

  addNews(provider: string): Observable<any> {
    let url = this._newsURL1 + provider + this._newsURL2
    return this._http.get(url, { responseType: 'json' })
  }


}
