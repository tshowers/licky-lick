import { Section } from './section.model';
import { Contact } from './contact.model';
import { PhoneNumber } from './phone-number.model';
import { EmailAddress } from './email-address.model';
import { ShoppingCart } from './shopping-cart.model';
import { Address } from './address.model';
import { FOP } from './fop.model';

export class User {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;
  public account: string;

  public customer_id?: string;
  public status?: string;
  public emailProvider?: string;
  public email?: string;
  public helpNeeded? : boolean =true;
  public openView? : boolean = false;
  public newsSources? = [];

  public contact_id?: string;
  public contact?: Contact;
  public address_id?: string;
  public addresses?: Address[];
  public phone_number_id?: string;
  public phoneNumbers?: PhoneNumber[];
  public fop_id?: string;
  public fop?: FOP[];
  public email_address_id?: string;
  public emailAddresses?: EmailAddress[];
  public shopping_cart_id?: string;
  public shoppingCart?: ShoppingCart;

  public messagesLastCheckedDate?;
  public tasksLastCheckedDate?;
  public alertsLastCheckedDate?;
  public cartLastCheckedDate?;

  public introContactImport?: boolean = false;
  public introCalendarImport?: boolean = false;
  public welcomeMessageCount?: number = 0;

  public workflow?: Array<any>;
  public appActions?: Array<any>;
  public groups?: Array<any>;

  public currentStep?;
  public currentStepName?;
  public roles?: Roles[];
  public role?;

  public amount?;
  public measure?;
  public moduleAccess?: ModuleAccess;
  public referral?;

  public sections?: Array<Section>;
  public publishedAt;

  public lastUpdated;
  public timeStamp;
  public lastUpdatedBy?;
  public views?: number;
  public lastViewed?;

  public draft?: boolean = true;
  public deleted?: boolean = false;
  public keywords?;

  public user_id;
  public userName;
  public userImage?;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

  static restoreData(data: any): void {
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;

    data.account = data.hasOwnProperty('account') ? data.account : null;

    data.customer_id = data.hasOwnProperty('customer_id') ? data.customer_id : null;
    data.status = data.hasOwnProperty('status') ? data.status : null;
    data.emailProvider = data.hasOwnProperty('emailProvider') ? data.emailProvider : null;
    data.email = data.hasOwnProperty('email') ? data.email : null;
    data.helpNeeded = data.hasOwnProperty('helpNeeded') ? data.helpNeeded : false;
    data.openView = data.hasOwnProperty('openView') ? data.openView : false;
    data.newsSources = data.hasOwnProperty('newsSources') ? data.newsSources : [];

    data.contact_id = data.hasOwnProperty('contact_id') ? data.contact_id : null;
    data.contact = data.hasOwnProperty('contact') ? data.contact : null;
    data.address_id = data.hasOwnProperty('address_id') ? data.address_id : null;
    data.addresses = data.hasOwnProperty('addresses') ? data.addresses : [];
    data.phone_number_id = data.hasOwnProperty('phone_number_id') ? data.phone_number_id : null;
    data.phoneNumbers = data.hasOwnProperty('phoneNumbers') ? data.phoneNumbers : [];
    data.fop_id = data.hasOwnProperty('fop_id') ? data.fop_id : null;
    data.fop = data.hasOwnProperty('fop') ? data.fop : [];
    data.email_address_id = data.hasOwnProperty('email_address_id') ? data.email_address_id : null;
    data.emailAddresses = data.hasOwnProperty('emailAddresses') ? data.emailAddresses : [];
    data.shopping_cart_id = data.hasOwnProperty('shopping_cart_id') ? data.shopping_cart_id : null;
    data.shoppingCart = data.hasOwnProperty('shoppingCart') ? data.shoppingCart : null;

    data.messagesLastCheckedDate = data.hasOwnProperty('messagesLastCheckedDate') ? data.messagesLastCheckedDate : null;
    data.tasksLastCheckedDate = data.hasOwnProperty('tasksLastCheckedDate') ? data.tasksLastCheckedDate : null;
    data.alertsLastCheckedDate = data.hasOwnProperty('alertsLastCheckedDate') ? data.alertsLastCheckedDate : null;

    data.introContactImport = data.hasOwnProperty('introContactImport') ? data.introContactImport : false;
    data.introCalendarImport = data.hasOwnProperty('introCalendarImport') ? data.introCalendarImport : false;
    data.welcomeMessageCount = data.hasOwnProperty('welcomeMessageCount') ? data.welcomeMessageCount : 0;

    data.workflow = data.hasOwnProperty('workflow') ? data.workflow : [];
    data.appActions = data.hasOwnProperty('appActions') ? data.appActions : [];
    data.groups = data.hasOwnProperty('groups') ? data.groups : [];

    data.currentStep = data.hasOwnProperty('currentStep') ? data.currentStep : 0;
    data.currentStepName = data.hasOwnProperty('currentStepName') ? data.currentStepName : null;
    data.roles = data.hasOwnProperty('roles') ? data.roles : [];
    data.role = data.hasOwnProperty('role') ? data.role : null;

    data.amount = data.hasOwnProperty('amount') ? data.amount : 0;
    data.measure = data.hasOwnProperty('measure') ? data.measure : null;
    data.moduleAccess = data.hasOwnProperty('moduleAccess') ? data.moduleAccess : null;
    data.referral = data.hasOwnProperty('referral') ? data.referral : null;

    data.sections = data.hasOwnProperty('sections') ? data.sections : [];

    data.lastUpdated = data.hasOwnProperty('lastUpdated') ? data.lastUpdated : null;
    data.timeStamp = data.hasOwnProperty('timeStamp') ? data.timeStamp : null;
    data.lastUpdatedBy = data.hasOwnProperty('lastUpdatedBy') ? data.lastUpdatedBy : null;
    data.views = data.hasOwnProperty('views') ? data.views : 0;
    data.lastViewed = data.hasOwnProperty('lastViewed') ? data.lastViewed : null;

    data.draft = data.hasOwnProperty('draft') ? data.draft : true;
    data.deleted = data.hasOwnProperty('deleted') ? data.deleted : false;
    data.keywords = data.hasOwnProperty('keywords') ? data.keywords : null;

    data.user_id = data.hasOwnProperty('user_id') ? data.user_id : null;
    data.userName = data.hasOwnProperty('userName') ? data.userName : null;
    data.userImage = data.hasOwnProperty('userImage') ? data.userImage : null;

    data.bookmarked = data.hasOwnProperty('bookmarked') ? data.bookmarked : false;
    data.bookmarkedCount = data.hasOwnProperty('bookmarkedCount') ? data.bookmarkedCount : 0;
    data.favored = data.hasOwnProperty('favored') ? data.favored : false;
    data.favoredCount = data.hasOwnProperty('favoredCount') ? data.favoredCount : 0;
    data.broadcasted = data.hasOwnProperty('broadcasted') ? data.broadcasted : false;
    data.broadcastedCount = data.hasOwnProperty('broadcastedCount') ? data.broadcastedCount : 0;
  }


}

export interface Roles {
  reader: boolean;
  author?: boolean;
  admin?: boolean;
}

export interface ModuleAccess {
  help?: boolean;
  tasks?: boolean;
  news?: boolean;
  schedules?: boolean;
  messages?: boolean;
  opportunities?: boolean;
  projects?: boolean;
  stores?: boolean;
  contacts?: boolean;
  documents?: boolean;
  topics?: boolean;
  alerts?: boolean;
  goals?: boolean;
  blog?: boolean;
  timesheets?: boolean;
  emails?: boolean;
  settings?: boolean;
  semantics?: boolean;
  properties?: boolean;
}


export class Favorite {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public dataModel_id?;

  public publishedAt;

  public lastUpdated;
  public timeStamp;
  public lastUpdatedBy?;
  public views?: number;
  public lastViewed?;

  public draft?: boolean = true;
  public deleted?: boolean = false;
  public keywords?;

  public user_id;
  public userName;
  public userImage?;

  static restoreData(data: any): void {
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;

    data.dataModel_id = data.hasOwnProperty('dataModel_id') ? data.dataModel_id : null;

    data.publishedAt = data.hasOwnProperty('publishedAt') ? data.publishedAt : null;

    data.sections = data.hasOwnProperty('sections') ? data.sections : [];

    data.lastUpdated = data.hasOwnProperty('lastUpdated') ? data.lastUpdated : null;
    data.timeStamp = data.hasOwnProperty('timeStamp') ? data.timeStamp : null;
    data.lastUpdatedBy = data.hasOwnProperty('lastUpdatedBy') ? data.lastUpdatedBy : null;
    data.views = data.hasOwnProperty('views') ? data.views : 0;
    data.lastViewed = data.hasOwnProperty('lastViewed') ? data.lastViewed : null;

    data.draft = data.hasOwnProperty('draft') ? data.draft : true;
    data.deleted = data.hasOwnProperty('deleted') ? data.deleted : false;
    data.keywords = data.hasOwnProperty('keywords') ? data.keywords : null;

    data.user_id = data.hasOwnProperty('user_id') ? data.user_id : null;
    data.userName = data.hasOwnProperty('userName') ? data.userName : null;
    data.userImage = data.hasOwnProperty('userImage') ? data.userImage : null;

    data.bookmarked = data.hasOwnProperty('bookmarked') ? data.bookmarked : false;
    data.bookmarkedCount = data.hasOwnProperty('bookmarkedCount') ? data.bookmarkedCount : 0;
    data.favored = data.hasOwnProperty('favored') ? data.favored : false;
    data.favoredCount = data.hasOwnProperty('favoredCount') ? data.favoredCount : 0;
    data.broadcasted = data.hasOwnProperty('broadcasted') ? data.broadcasted : false;
    data.broadcastedCount = data.hasOwnProperty('broadcastedCount') ? data.broadcastedCount : 0;
  }


}

export class Bookmark {
  public id?: string;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public dataModel_id?;

  public publishedAt;

  public lastUpdated;
  public timeStamp;
  public lastUpdatedBy?;
  public views?: number;
  public lastViewed?;

  public draft?: boolean = true;
  public deleted?: boolean = false;
  public keywords?;

  public user_id;
  public userName;
  public userImage?;

  static restoreData(data: any): void {
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;

    data.dataModel_id = data.hasOwnProperty('dataModel_id') ? data.dataModel_id : null;

    data.publishedAt = data.hasOwnProperty('publishedAt') ? data.publishedAt : null;

    data.sections = data.hasOwnProperty('sections') ? data.sections : [];

    data.lastUpdated = data.hasOwnProperty('lastUpdated') ? data.lastUpdated : null;
    data.timeStamp = data.hasOwnProperty('timeStamp') ? data.timeStamp : null;
    data.lastUpdatedBy = data.hasOwnProperty('lastUpdatedBy') ? data.lastUpdatedBy : null;
    data.views = data.hasOwnProperty('views') ? data.views : 0;
    data.lastViewed = data.hasOwnProperty('lastViewed') ? data.lastViewed : null;

    data.draft = data.hasOwnProperty('draft') ? data.draft : true;
    data.deleted = data.hasOwnProperty('deleted') ? data.deleted : false;
    data.keywords = data.hasOwnProperty('keywords') ? data.keywords : null;

    data.user_id = data.hasOwnProperty('user_id') ? data.user_id : null;
    data.userName = data.hasOwnProperty('userName') ? data.userName : null;
    data.userImage = data.hasOwnProperty('userImage') ? data.userImage : null;

    data.bookmarked = data.hasOwnProperty('bookmarked') ? data.bookmarked : false;
    data.bookmarkedCount = data.hasOwnProperty('bookmarkedCount') ? data.bookmarkedCount : 0;
    data.favored = data.hasOwnProperty('favored') ? data.favored : false;
    data.favoredCount = data.hasOwnProperty('favoredCount') ? data.favoredCount : 0;
    data.broadcasted = data.hasOwnProperty('broadcasted') ? data.broadcasted : false;
    data.broadcastedCount = data.hasOwnProperty('broadcastedCount') ? data.broadcastedCount : 0;
  }

}
