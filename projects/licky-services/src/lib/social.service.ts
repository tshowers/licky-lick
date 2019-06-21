import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Favorite, Bookmark, Message, NewsArticle, Contact } from 'lick-data';
import { Observable } from 'rxjs';
import { FirebaseDataService, MESSAGES, FAVORITES, BOOKMARKS } from './firebase-data.service';
import { map, take } from 'rxjs/operators';


const FACEBOOK_URL = "https://graph.facebook.com/v2.11/"

const TWITTER_URL = "https://api.twitter.com/1.1/"
const FOLLOWERS = "followers/list.json";

const FOLLOWERS_PARAMS = new HttpParams({
  fromObject: {
    screen_name: 'tennaljennings',
    skip_status: 'true',
    include_user_entities: 'false'
  }
});


@Injectable()
export class SocialService {


  constructor(public db: FirebaseDataService,
    private _httpClient: HttpClient) { }

  getFollowers() {
    return this._httpClient.get(TWITTER_URL + FOLLOWERS, {params: {screen_name: 'tennaljennings', skip_status: 'true', include_user_entities: 'false'}})
    .pipe(map(res => {
      return res;
    }));
  }

  getFacebookUser() {
    // let user = this.authService.getFirebaseUser();

    // this.authService.logger.trace(user);
    let user_id = '';
    let accessToken = '';
    // return this._httpClient.get(FACEBOOK_URL + user_id, {params: {fields: 'id,name,about,birthday', access_token: accessToken}})
    // .map(res => {
    //   return res;
    // });
  }

  // isNewsBroadcast(article: NewsArticle, userContact: Contact): boolean {
  //   // this.authService.logger.trace("isNewsBroadcast");
  //   try {
  //     let message = new Message();
  //     message.article = article;
  //     if (userContact && userContact.url)
  //       message.photoURL = userContact.url;
  //     else
  //       message.url = this.authService.getPhotoURL();
  //     article.broadcasted = true
  //     this.db.saveDataWithMeta(MESSAGES, message, this.authService.getUserID(), this.authService.getDisplayName())
  //     return true;
  //   } catch (err) {
  //     console.error(err)
  //     return false;
  //   }
  // }
  //
  // isArticleFavorte(article: NewsArticle, userContact: Contact): boolean {
  //   // this.authService.logger.trace("isArticleFavorte");
  //   try {
  //     let favorite = new Favorite();
  //     favorite.name = article.title;
  //     favorite.link = article.url
  //     favorite.url = article.urlToImage;
  //     article.favored = true;
  //     this.db.saveDataWithMeta(FAVORITES + '/' + this.authService.getUserID(), favorite, this.authService.getUserID(), this.authService.getDisplayName())
  //     return true;
  //   } catch (err) {
  //     return false;
  //   }
  // }

  // isArticleBookmark(article: NewsArticle, userContact: Contact): boolean {
  //   // this.authService.logger.trace("isArticleBookmark");
  //   try {
  //     let bookmark = new Bookmark();
  //     bookmark.name = article.title
  //     bookmark.link = article.url
  //     bookmark.url = article.urlToImage;
  //     article.bookmarked = true;
  //     this.db.saveDataWithMeta(BOOKMARKS + '/' + this.authService.getUserID(), bookmark, this.authService.getUserID(), this.authService.getDisplayName())
  //     return true;
  //   } catch (err) {
  //     return false;
  //   }
  // }


  // setNewsSocial(articles: NewsArticle[]): void {
  //   // this.authService.logger.trace("setNewsSocial");
  //   this.setBookmarks(articles);
  //   this.setBroadCasts(articles);
  //   this.setFavorites(articles);
  // }
  //
  // setBookmarks(articles: NewsArticle[]): void {
  //   // this.authService.logger.trace("setBookmarks");
  //   articles.forEach((article) => {
  //     this.isArticleBookmarked(article).subscribe()
  //   })
  // }
  //
  // setBroadCasts(articles: NewsArticle[]): void {
  //   // this.authService.logger.trace("setBroadCasts");
  //   articles.forEach((article) => {
  //     this.isArticleBroadCasted(article).subscribe()
  //   })
  // }
  //
  // setFavorites(articles: NewsArticle[]): void {
  //   // this.authService.logger.trace("setFavorites");
  //   articles.forEach((article) => {
  //     this.isArticleFavored(article).subscribe()
  //   })
  // }

  // isArticleFavored(article: NewsArticle): Observable<boolean> {
  //   // this.authService.logger.trace("isArticleFavored");
  //   return this.db.getDataListingByKey(FAVORITES + '/' + this.authService.getUserID(), "name", article.title).valueChanges()
  //   .pipe(take(1))
  //   .pipe(map((favorites) => {
  //     article.favoredCount = favorites.length
  //     let b = favorites.filter(data => (data.user_id == this.authService.getUserID()))
  //     if (b.length > 0) {
  //       article.favored = true;
  //     } else {
  //       article.favored = false;
  //     }
  //     return (b.length > 0)
  //   }))
  // }

  // isArticleBroadCasted(article: NewsArticle): Observable<boolean> {
  //   // this.authService.logger.trace("isArticleBroadCasted");
  //   return this.db.getDataListingByKey(MESSAGES, "article/title", article.title).valueChanges()
  //   .pipe(take(1))
  //   .pipe(map((messages) => {
  //     article.broadcastedCount = messages.length
  //     let b = messages.filter(data => (data.user_id == this.authService.getUserID()))
  //     if (b.length > 0) {
  //       article.broadcasted = true;
  //     } else {
  //       article.broadcasted = false;
  //     }
  //
  //     return (b.length > 0)
  //   }))
  // }

  // isArticleBookmarked(article: NewsArticle): Observable<boolean> {
  //   // this.authService.logger.trace("isArticleBookmarked");
  //   return this.db.getDataListingByKey(BOOKMARKS + '/' + this.authService.getUserID(), "name", article.title).valueChanges()
  //   .pipe(take(1))
  //   .pipe(map((bookmarks) => {
  //     article.bookmarkedCount = bookmarks.length
  //     let b = bookmarks.filter(data => (data.user_id == this.authService.getUserID()))
  //     if (b.length > 0) {
  //       article.bookmarked = true;
  //     } else {
  //       article.bookmarked = false;
  //     }
  //     return (b.length > 0)
  //   }))
  // }
  //
  // /********************************/
  // setDataItemSocial(data: any): void {
  //   let holder = [];
  //   holder.push(data)
  //   this.setDataSocial(holder);
  // }
  //
  //
  // setDataSocial(data: any): void {
  //   if (this.authService && (this.authService.getUserID() != null)) {
  //     this.setDataBookmarks(data);
  //     this.setDataBroadCasts(data);
  //     this.setDataFavorites(data);
  //   }

  // }


  // isMessage(path: string, model: any, iconClass?: string, userContact?: Contact) {
  //   let message = new Message();
  //   if (iconClass)
  //     message.iconClass = iconClass;
  //
  //   if (model.description)
  //     message.text = model.description;
  //
  //   message.dataModel_id = model.id;
  //   if (model.name)
  //     message.name = model.name;
  //   else if (model.title)
  //     message.name = model.title;
  //
  //   message.linkUrl = path + model.id
  //
  //   if (model.url)
  //     message.imageUrl = model.url;
  //
  //   if (userContact && userContact.url)
  //     message.photoURL = userContact.url;
  //   else
  //     message.photoURL = this.authService.getPhotoURL();
  //
  //   model.broadcasted = true
  //   this.db.saveDataWithMeta(MESSAGES, message, this.authService.getUserID(), this.authService.getDisplayName())
  // }
  //
  //
  // isFavorite(context: string, model: any) {
  //   let favorite = new Favorite();
  //   favorite.dataModel_id = model.id;
  //   if (model.name)
  //     favorite.name = model.name;
  //   else if (model.title)
  //     favorite.name = model.title;
  //
  //   favorite.link = context + "/" + model.id
  //
  //   if (model.url)
  //     favorite.url = model.url;
  //
  //   model.favored = true;
  //   this.db.saveDataWithMeta(FAVORITES + '/' + this.authService.getUserID(), favorite, this.authService.getUserID(), this.authService.getDisplayName())
  // }
  //
  // isBookmark(context: string, model: any) {
  //   let bookmark = new Bookmark();
  //   bookmark.dataModel_id = model.id;
  //   if (model.name)
  //     bookmark.name = model.name;
  //   else if (model.title)
  //     bookmark.name = model.title;
  //
  //   bookmark.link = context + "/" + model.id
  //
  //   if (model.url)
  //     bookmark.url = model.url;
  //
  //   model.bookmarked = true;
  //   this.db.saveDataWithMeta(BOOKMARKS + '/' + this.authService.getUserID(), bookmark, this.authService.getUserID(), this.authService.getDisplayName())
  // }
  //
  // setDataBookmarks(data: any): void {
  //   data.forEach((d) => {
  //     this.isDataBookmarked(d).subscribe()
  //   })
  // }
  //
  // setDataBroadCasts(data: any): void {
  //   data.forEach((d) => {
  //     this.isDataBroadCasted(d).subscribe()
  //   })
  // }
  //
  // setDataFavorites(data: any): void {
  //   data.forEach((d) => {
  //     this.isDataFavored(d).subscribe()
  //   })
  // }
  //
  // isDataBookmarked(dataModel: any): Observable<boolean> {
  //   return this.db.getDataListingByKey(BOOKMARKS + '/' + this.authService.getUserID(), "dataModel_id", dataModel.id).valueChanges()
  //   .pipe(take(1))
  //   .pipe(map((bookmarks) => {
  //     dataModel.bookmarkedCount = bookmarks.length
  //     let b = bookmarks.filter(data => (data.user_id == this.authService.getUserID()))
  //     if (b.length > 0) {
  //       dataModel.bookmarked = true;
  //     } else {
  //       dataModel.bookmarked = false;
  //     }
  //     return (b.length > 0)
  //   }))
  // }
  // isDataBroadCasted(dataModel: any): Observable<boolean> {
  //   return this.db.getDataListingByKey(MESSAGES, "dataModel_id", dataModel.id).valueChanges()
  //   .pipe(take(1))
  //   .pipe(map((messages) => {
  //     dataModel.broadcastedCount = messages.length
  //     let b = messages.filter(data => (data.user_id == this.authService.getUserID()))
  //     if (b.length > 0) {
  //       dataModel.broadcasted = true;
  //     } else {
  //       dataModel.broadcasted = false;
  //     }
  //     return (b.length > 0)
  //   }))
  // }
  // isDataFavored(dataModel: any): Observable<boolean> {
  //   return this.db.getDataListingByKey(FAVORITES + '/' + this.authService.getUserID(), "dataModel_id", dataModel.id).valueChanges()
  //   .pipe(take(1))
  //   .pipe(map((favorties) => {
  //     dataModel.favoredCount = favorties.length
  //     let b = favorties.filter(data => (data.user_id == this.authService.getUserID()))
  //     if (b.length > 0) {
  //       dataModel.favored = true;
  //     } else {
  //       dataModel.favored = false;
  //     }
  //     return (b.length > 0)
  //   }))
  // }

}
