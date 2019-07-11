import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NewsHelperService {

  private _newArticle: any;

  constructor() { }

  public setNewsArticle(newsArticle: any) : void {
    this._newArticle = newsArticle;
  }

  public getNewsArticle() : any {
    return this._newArticle;
  }
}
