import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'lick-data';

export const APP_ACTIVITY = '/app-activity'
export const BLOGS = '/blogs';
export const ARTICLES = '/articles';
export const ALERTS = '/alerts';
export const BOOKMARKS = '/bookmarks';
export const CAROUSELS = '/carousels';
export const FEATURETTES = '/featurettes';
export const PARALLAXS = '/parallaxs';
export const FAVORITES = '/favorites';
export const SERVICE_BOXES = '/service-boxes';
export const CONTACTS = '/contacts';
export const DOCUMENTS = '/uploads';
export const DROPDOWNS = '/dropdowns';
export const EMAILS = '/emails';
export const HELP = '/help';
export const QUOTES = '/quotes';
export const HELP_PROGRESS = '/help-progress';
export const PROPERTIES = '/properties';
export const GROUPS = '/groups';

export const MESSAGES = '/messages';
export const OPPORTUNITES = '/opportunities';
export const ADDRESSES = '/addresses';
export const PHONE_NUMBERS = '/phone-numbers';
export const EMAIL_ADDRESSES = '/email-addresses';
export const FOPS = '/fops';
export const IMAGES = '/images';
export const JUST_TEXTS = '/just-texts';
export const PROJECTS = '/projects';
export const AFFECTED_PARTIES = '/affected-parties';
export const AFFECTED_SYSTEMS = '/affected-systems';
export const APPROVALS = '/approvals';
export const BUGS = '/bugs';
export const DELIVERABLES = '/deliverables';
export const IMPLEMENTATION_PLANS = '/implementation-plans';
export const REQUIREMENTS = '/requirements';
export const NEWS = "/news";
export const EVENTS = '/events';
export const SETTINGS = '/settings';
export const STORES = '/stores';
export const STATS = '/stats';
export const PRODUCT_BUNDLES = '/product-bundles';
export const SHOPPING_CARTS = '/shopping-carts';
export const CATALOGS = '/catalogs';
export const INVOICES = '/invoices';
export const ORDERS = '/orders';
export const OFFERS = '/offers';
export const PAYMENTS = '/payments';
export const PRODUCTS = '/products';
export const RECEIPTS = '/receipts';
export const USERS = '/users';
export const TASKS = '/tasks';
export const TOPICS = '/topics';
export const GOALS = '/goals';
export const PROJECT_REPORTS = '/project-reports';
export const WORK_FLOWS = '/work-flows';
export const ACTION_FLOWS = '/actions';

export const FILTER_LIMIT: number = 5;
// export const FROALA: boolean = environment.FROALA;
export const DELUXE_PACKAGE = "deluxe";
export const PROJECT_PACKAGE = "project";
export const DEFAULT_PACKAGE = "deluxe";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  public databaseError = new Subject<string>();
  batch: number = 25;
  private _db;
  private _user: User;

  private _augmentPath = [
    CONTACTS,
    NEWS,
    PROJECTS,
    BLOGS,
    ALERTS,
    TOPICS,
    SHOPPING_CARTS,
    SETTINGS,
    STORES,
    EVENTS,
    OPPORTUNITES,
    HELP,
    FAVORITES,
    BOOKMARKS,
    APP_ACTIVITY
  ]

  constructor() { }

  init(): void {
    this._db = firebase.database();
  }

  setDeleted(path: string, key: any, data: any): void {
    data.deleted = true;
    this.updateData(path, key, data);
  }

  updateData(path: string, key: any, data: any): void {
    path = this.getAugmentedPath(path);

    this.setUpdateValues(data);
    this._db.ref(path + '/' + key).set(data, (error) => {
      if (error)
        this.databaseError.next(error.message);
    })
  }

  getData(path: string, id: string): Observable<any> {
    path = this.getAugmentedPath(path);
    console.log("GETTING DATA FOR PATH", path)
    return new Observable((observer) => {

      this._db.ref(path + '/' + id).once('value').then(
        (snapshot) => {

          let value = snapshot.val();

          observer.next(value)
          observer.complete()
        }
      ),
        (error) => {
          if (error)
            this.databaseError.next(error);
        }
    })
  }

  getDataReference(path: string, id: string): Observable<any> {
    path = this.getAugmentedPath(path);
    console.log("GETTING REFERENCE DATA FOR PATH", path)
    return new Observable((observer) => {

      this._db.ref(path + '/' + id).on('value').then(
        (snapshot) => {

          let value = snapshot.val();

          observer.next(value)
          observer.complete()
        }
      ),
        (error) => {
          if (error)
            this.databaseError.next(error);
        }
    })
  }

  writeData(path: string, data: any): Observable<any> {
    path = this.getAugmentedPath(path);
    console.log("Writing to " + path)
    this.setNewDataValues(data);
    return Observable.create((observer) => {
      this._db.ref(path).push(data, (error) => {

        if (error)
          this.databaseError.next(error.message);
      }).then((snap) => {
        console.log("Key", snap);
        if (snap)
          observer.next(snap.key);
        else
          observer.next(null);
        observer.complete();
      })
    })
  }

  public getAugmentedPath(path: string): string {
    for (let i = 0; i < this._augmentPath.length; i++) {

        if (this._augmentPath[i] == path) {
          if (this._user && this._user.account)
            return path + "/" + this._user.account;
          else {
            console.error("USER OR USER ACCOUNT IS NULL");
            return path;
          }
        }
    }
    return path;
  }



  getDataCollection(path): Observable<any> {
    path = this.getAugmentedPath(path);
    // console.log("Getting data for path", path);
    return Observable.create((observer) => {

      this._db.ref(path).on('value', (snapshot) => {
        // console.log("Snapshot", JSON.stringify( snapshot.val()));
        observer.next((snapshot) ? snapshot.val() : null);
        observer.complete();
      },
        (error) => {
          if (error)
            this.databaseError.next(error);
        })
    })
  }

  getDataByBatch(path: string, batchSize: number, keyField: string, lastKey?: string): Observable<any> {
    path = this.getAugmentedPath(path);
    if (lastKey)
      return Observable.create((observer) => {
        this._db.ref(path)
          .startAt(lastKey)
          .limitToFirst(batchSize)
          .on('value', (snapshot) => {
            observer.next((snapshot) ? snapshot.val() : null)
            observer.complete();
          }, (error) => {
            if (error)
              this.databaseError.next(error);
          })
      })
  }

  setUser(user: User): void {
    this._user = user;
  }

  public getConvertDataToList(data: any): Observable<any> {
    // console.log(JSON.stringify(data));
    let list: any[] = [];
    for (let item in data) {
      this.doFixUpData(data, item);
      list.push(data[item]);
    }

    return Observable.create((observer) => {
      observer.next(list);
      observer.complete();
    })
  }

  public getListToArray(data: any): any[] {
    // console.log(JSON.stringify(data));
    let list: any[] = [];
    for (let item in data) {
      this.doFixUpData(data, item);
      list.push(data[item]);
    }

    return list;
  }


  public getRecordsToDisplay(startPage, pageSize, data: any[]): any[] {
    return data.slice(((startPage - 1) * pageSize), (((startPage - 1) * pageSize) + pageSize))
  }


  private doFixUpData(data, item): void {

    data[item].id = item;
    if (data[item].firstName)
      data[item].name = data[item].firstName;
    if (data[item].lastName)
      data[item].name += (' ' + data[item].lastName);
    if (data[item].firstName && data[item].lastName)
      data[item].name = data[item].firstName + ' ' + data[item].lastName;

  }

  private setNewDataValues(data: any): void {
    data.timeStamp = new Date().getTime();
    if (this._user) {
      data.user_id = (this._user.user_id) ? this._user.user_id : null;
      data.userName = (this._user.name) ? this._user.name : null;
      data.userImage = (this._user.userImage) ? this._user.userImage : null;
    }
    this.setUpdateValues(data);
  }

  private setUpdateValues(data: any): void {

    data.lastUpdated = new Date().getTime();
    if (this._user && this._user.name) {
      data.lastUpdatedBy = (this._user.name);
    }
  }

}
