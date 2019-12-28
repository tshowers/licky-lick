import { Section } from './section.model';

export class Contact {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public firstName: string;
  public middleName?: string;
  public lastName: string;

  public isCompany?: boolean = false;
  public description?: string;
  public ssn?: string;
  public company?: Company = new Company();
  public prefix?: string;

  public profession?: string;
  public status?: string;
  public profileType?: string;
  public linkedinUrl?: string;
  public nickname?: string;
  public birthday?: string;
  public anniversary?: any = null;
  public gender?: string;
  public dependents?: Array<any> = [];
  public preferences?: Array<any> = [];
  public opportunities?: Array<any> = [];
  public orders?: Array<any> = [];
  public fops?: Array<any> = [];
  public events?: Array<any> = [];
  public alerts?: Array<any> = [];
  public projects?: Array<any> = [];
  public invoices?: Array<any> = [];
  public ratings?: Array<any> = [];
  public phoneNumbers?: Array<any> = [];
  public emailAddresses?: Array<any> = [];
  public addresses?: Array<any> = [];
  public notes?: Array<any> = [];

  public tempScore?: number = 0;
  public systemUser?: boolean = false;
  public employee?: boolean = false;

  public billingRate?: number = 0;
  public loginID?: string;

  public sections?: Array<Section> = [];
  public lastUpdated?;
  public timeStamp?;
  public lastUpdatedBy?;
  public views?: number;
  public lastViewed?;

  public draft?: boolean = true;
  public deleted?: boolean = false;
  public keywords?;

  public user_id?;
  public userName?;
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

    data.firstName = data.hasOwnProperty('firstName') ? data.firstName : null;
    data.middleName = data.hasOwnProperty('middleName') ? data.middleName : null;
    data.lastName = data.hasOwnProperty('lastName') ? data.lastName : null;

    data.isCompany = data.hasOwnProperty('isCompany') ? data.isCompany : false;
    data.description = data.hasOwnProperty('description') ? data.description : null;
    data.ssn = data.hasOwnProperty('ssn') ? data.ssn : null;
    data.company = data.hasOwnProperty('company') ? data.company : new Company();
    data.prefix = data.hasOwnProperty('prefix') ? data.prefix : null;

    data.profession = data.hasOwnProperty('id') ? data.id : null;
    data.status = data.hasOwnProperty('id') ? data.id : null;
    data.profileType = data.hasOwnProperty('id') ? data.id : null;
    data.linkedinUrl = data.hasOwnProperty('id') ? data.id : null;
    data.nickname = data.hasOwnProperty('id') ? data.id : null;
    data.birthday = data.hasOwnProperty('id') ? data.id : null;
    data.anniversary = data.hasOwnProperty('id') ? data.id : null;
    data.gender = data.hasOwnProperty('id') ? data.id : null;
    data.dependents = data.hasOwnProperty('id') ? data.id : [];
    data.preferences = data.hasOwnProperty('id') ? data.id : [];
    data.opportunities = data.hasOwnProperty('id') ? data.id : [];
    data.orders = data.hasOwnProperty('id') ? data.id : [];
    data.fops = data.hasOwnProperty('id') ? data.id : [];
    data.events = data.hasOwnProperty('id') ? data.id : [];
    data.alerts = data.hasOwnProperty('id') ? data.id : [];
    data.projects = data.hasOwnProperty('id') ? data.id : [];
    data.invoices = data.hasOwnProperty('id') ? data.id : [];
    data.ratings = data.hasOwnProperty('id') ? data.id : [];
    data.phoneNumbers = data.hasOwnProperty('id') ? data.id : [];
    data.emailAddresses = data.hasOwnProperty('id') ? data.id : [];
    data.addresses = data.hasOwnProperty('id') ? data.id : [];
    data.notes = data.hasOwnProperty('id') ? data.id : [];

    data.tempScore = data.hasOwnProperty('id') ? data.id : 0;
    data.systemUser = data.hasOwnProperty('id') ? data.id : false;
    data.employee = data.hasOwnProperty('id') ? data.id : false;

    data.billingRate = data.hasOwnProperty('id') ? data.id : 0;
    data.loginID = data.hasOwnProperty('id') ? data.id : null;

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

export class Dependent {
  public firstName;
  public lastName;
  public relationship;
  public sections?: Array<Section> = [];
  public lastUpdated;
  public timeStamp;
  public lastUpdatedBy?;
  public lastViewed?;
}

export class Company {
  public id?;
  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared?: boolean = true;


  public numberOfEmployees?: string;
  public other?: string;
  public phoneNumbers?: Array<any> = [];
  public emailAddresses?: Array<any> = [];
  public addresses?: Array<any> = [];
  public sicCode?: string;
  public status?: string;

  public sections?: Array<Section> = [];
  public lastUpdated?;
  public timeStamp?;
  public lastUpdatedBy?;
  public views?: number;
  public lastViewed?;

  public draft?: boolean = true;
  public deleted?: boolean = false;
  public keywords?;

  public user_id?;
  public userName?;

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

    data.numberOfEmployees = data.hasOwnProperty('numberOfEmployees') ? data.numberOfEmployees : null;
    data.other = data.hasOwnProperty('other') ? data.other : null;
    data.phoneNumbers = data.hasOwnProperty('phoneNumbers') ? data.phoneNumbers : null;
    data.emailAddresses = data.hasOwnProperty('emailAddresses') ? data.emailAddresses : null;
    data.addresses = data.hasOwnProperty('addresses') ? data.addresses : null;
    data.sicCode = data.hasOwnProperty('sicCode') ? data.sicCode : null;
    data.status = data.hasOwnProperty('status') ? data.status : null;

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
