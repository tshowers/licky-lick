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
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;

    data.account = (data.account) ? data.account : null;

    data.customer_id = (data.customer_id) ? data.customer_id : null;
    data.status = (data.status) ? data.status : null;
    data.emailProvider = (data.emailProvider) ? data.emailProvider : null;
    data.email = (data.email) ? data.email : null;
    data.helpNeeded = (data.helpNeeded) ? data.helpNeeded : false;
    data.openView = (data.openView) ? data.openView : false;
    data.newsSources = (data.newsSources) ? data.newsSources : [];

    data.contact_id = (data.contact_id) ? data.contact_id : null;
    data.contact = (data.contact) ? data.contact : null;
    data.address_id = (data.address_id) ? data.address_id : null;
    data.addresses = (data.addresses) ? data.addresses : [];
    data.phone_number_id = (data.phone_number_id) ? data.phone_number_id : null;
    data.phoneNumbers = (data.phoneNumbers) ? data.phoneNumbers : [];
    data.fop_id = (data.fop_id) ? data.fop_id : null;
    data.fop = (data.fop) ? data.fop : [];
    data.email_address_id = (data.email_address_id) ? data.email_address_id : null;
    data.emailAddresses = (data.emailAddresses) ? data.emailAddresses : [];
    data.shopping_cart_id = (data.shopping_cart_id) ? data.shopping_cart_id : null;
    data.shoppingCart = (data.shoppingCart) ? data.shoppingCart : null;

    data.messagesLastCheckedDate = (data.messagesLastCheckedDate) ? data.messagesLastCheckedDate : null;
    data.tasksLastCheckedDate = (data.tasksLastCheckedDate) ? data.tasksLastCheckedDate : null;
    data.alertsLastCheckedDate = (data.alertsLastCheckedDate) ? data.alertsLastCheckedDate : null;

    data.introContactImport = (data.introContactImport) ? data.introContactImport : false;
    data.introCalendarImport = (data.introCalendarImport) ? data.introCalendarImport : false;
    data.welcomeMessageCount = (data.welcomeMessageCount) ? data.welcomeMessageCount : 0;

    data.workflow = (data.workflow) ? data.workflow : [];
    data.appActions = (data.appActions) ? data.appActions : [];
    data.groups = (data.groups) ? data.groups : [];

    data.currentStep = (data.currentStep) ? data.currentStep : 0;
    data.currentStepName = (data.currentStepName) ? data.currentStepName : null;
    data.roles = (data.roles) ? data.roles : [];
    data.role = (data.role) ? data.role : null;

    data.amount = (data.amount) ? data.amount : 0;
    data.measure = (data.measure) ? data.measure : null;
    data.moduleAccess = (data.moduleAccess) ? data.moduleAccess : null;
    data.referral = (data.referral) ? data.referral : null;

    data.sections = (data.sections) ? data.sections : [];

    data.lastUpdated = (data.lastUpdated) ? data.lastUpdated : null;
    data.timeStamp = (data.timeStamp) ? data.timeStamp : null;
    data.lastUpdatedBy = (data.lastUpdatedBy) ? data.lastUpdatedBy : null;
    data.views = (data.views) ? data.views : 0;
    data.lastViewed = (data.lastViewed) ? data.lastViewed : null;

    data.draft = (data.draft) ? data.draft : true;
    data.deleted = (data.deleted) ? data.deleted : false;
    data.keywords = (data.keywords) ? data.keywords : null;

    data.user_id = (data.user_id) ? data.user_id : null;
    data.userName = (data.userName) ? data.userName : null;
    data.userImage = (data.userImage) ? data.userImage : null;

    data.bookmarked = (data.bookmarked) ? data.bookmarked : false;
    data.bookmarkedCount = (data.bookmarkedCount) ? data.bookmarkedCount : 0;
    data.favored = (data.favored) ? data.favored : false;
    data.favoredCount = (data.favoredCount) ? data.favoredCount : 0;
    data.broadcasted = (data.broadcasted) ? data.broadcasted : false;
    data.broadcastedCount = (data.broadcastedCount) ? data.broadcastedCount : 0;
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
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;

    data.dataModel_id = (data.dataModel_id) ? data.dataModel_id : null;

    data.publishedAt = (data.publishedAt) ? data.publishedAt : null;

    data.sections = (data.sections) ? data.sections : [];

    data.lastUpdated = (data.lastUpdated) ? data.lastUpdated : null;
    data.timeStamp = (data.timeStamp) ? data.timeStamp : null;
    data.lastUpdatedBy = (data.lastUpdatedBy) ? data.lastUpdatedBy : null;
    data.views = (data.views) ? data.views : 0;
    data.lastViewed = (data.lastViewed) ? data.lastViewed : null;

    data.draft = (data.draft) ? data.draft : true;
    data.deleted = (data.deleted) ? data.deleted : false;
    data.keywords = (data.keywords) ? data.keywords : null;

    data.user_id = (data.user_id) ? data.user_id : null;
    data.userName = (data.userName) ? data.userName : null;
    data.userImage = (data.userImage) ? data.userImage : null;

    data.bookmarked = (data.bookmarked) ? data.bookmarked : false;
    data.bookmarkedCount = (data.bookmarkedCount) ? data.bookmarkedCount : 0;
    data.favored = (data.favored) ? data.favored : false;
    data.favoredCount = (data.favoredCount) ? data.favoredCount : 0;
    data.broadcasted = (data.broadcasted) ? data.broadcasted : false;
    data.broadcastedCount = (data.broadcastedCount) ? data.broadcastedCount : 0;
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
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;

    data.dataModel_id = (data.dataModel_id) ? data.dataModel_id : null;

    data.publishedAt = (data.publishedAt) ? data.publishedAt : null;

    data.sections = (data.sections) ? data.sections : [];

    data.lastUpdated = (data.lastUpdated) ? data.lastUpdated : null;
    data.timeStamp = (data.timeStamp) ? data.timeStamp : null;
    data.lastUpdatedBy = (data.lastUpdatedBy) ? data.lastUpdatedBy : null;
    data.views = (data.views) ? data.views : 0;
    data.lastViewed = (data.lastViewed) ? data.lastViewed : null;

    data.draft = (data.draft) ? data.draft : true;
    data.deleted = (data.deleted) ? data.deleted : false;
    data.keywords = (data.keywords) ? data.keywords : null;

    data.user_id = (data.user_id) ? data.user_id : null;
    data.userName = (data.userName) ? data.userName : null;
    data.userImage = (data.userImage) ? data.userImage : null;

    data.bookmarked = (data.bookmarked) ? data.bookmarked : false;
    data.bookmarkedCount = (data.bookmarkedCount) ? data.bookmarkedCount : 0;
    data.favored = (data.favored) ? data.favored : false;
    data.favoredCount = (data.favoredCount) ? data.favoredCount : 0;
    data.broadcasted = (data.broadcasted) ? data.broadcasted : false;
    data.broadcastedCount = (data.broadcastedCount) ? data.broadcastedCount : 0;
  }

}
