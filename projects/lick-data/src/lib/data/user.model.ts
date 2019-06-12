import { Section } from './section.model';
import { Contact } from './contact.model';
import { PhoneNumber } from './phone-number.model';
import { EmailAddress } from './email-address.model';
import { ShoppingCart } from './shopping-cart.model';
import { Address } from './address.model';
import { FOP } from './fop.model';

export class User {
  public $key?: string;
  public id?;
  public customer_id?: string;
  public status?: string;
  public emailProvider?: string;
  public email?: string;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;


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
  public $key?: string;
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

}

export class Bookmark {
  public $key?: string;
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
}
