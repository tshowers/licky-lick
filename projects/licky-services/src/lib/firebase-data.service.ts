import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IdGeneratorService } from './id-generator.service';

export const APP_ACTIVITY = '/app-activity/'
export const BLOGS = '/blogs/';
export const ARTICLES = '/article/s';
export const ALERTS = '/alerts/';
export const BOOKMARKS = '/bookmarks/';
export const CAROUSELS = '/carousels/';
export const FEATURETTES = '/featurettes/';
export const PARALLAXS = '/parallaxs/';
export const FAVORITES = '/favorites/';
export const SERVICE_BOXES = '/service-boxes/';
export const CONTACTS = '/contacts/';
export const DOCUMENTS = '/uploads/';
export const DROPDOWNS = '/dropdowns/';
export const EMAILS = '/emails/';
export const HELP = '/help/';
export const QUOTES = '/quotes/';
export const HELP_PROGRESS = '/help-progress/';
export const PROPERTIES = '/properties/';
export const GROUPS = '/groups/';

export const MESSAGES = '/messages/';
export const OPPORTUNITES = '/opportunities/';
export const ADDRESSES = '/addresses/';
export const PHONE_NUMBERS = '/phone-numbers/';
export const EMAIL_ADDRESSES = '/email-addresses/';
export const FOPS = '/fops/';
export const IMAGES = '/images/';
export const JUST_TEXTS = '/just-texts/';
export const PROJECTS = '/projects/';
export const AFFECTED_PARTIES = '/affected-parties/';
export const AFFECTED_SYSTEMS = '/affected-systems/';
export const APPROVALS = '/approvals/';
export const BUGS = '/bugs/';
export const DELIVERABLES = '/deliverables/';
export const IMPLEMENTATION_PLANS = '/implementation-plans/';
export const REQUIREMENTS = '/requirements/';
export const NEWS = "/news/";
export const EVENTS = '/events/';
export const SETTINGS = '/settings/';
export const STORES = '/stores/';
export const STATS = '/stats/';
export const PRODUCT_BUNDLES = '/product-bundles/';
export const SHOPPING_CARTS = '/shopping-carts/';
export const CATALOGS = '/catalogs/';
export const INVOICES = '/invoices/';
export const ORDERS = '/orders/';
export const OFFERS = '/offers/';
export const PAYMENTS = '/payments/';
export const PRODUCTS = '/products/';
export const RECEIPTS = '/receipts/';
export const USERS = '/users/';
export const TASKS = '/tasks/';
export const TOPICS = '/topics/';
export const GOALS = '/goals/';
export const PROJECT_REPORTS = '/project-reports/';
export const WORK_FLOWS = '/work-flows/';
export const ACTION_FLOWS = '/actions/';

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
  private db = firebase.database();

  constructor() {

  }

  getData(path: string, id: string) : any {
    return this.db.ref(path + id).once('value').then(
      (snapshot) => {
        let value = snapshot.val();
        console.log(value);
        return value;
      }
    )
  }

  getDataCollection(path) : any {
    return this.db.ref(path);
  }

}
