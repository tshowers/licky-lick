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
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;

    data.firstName = (data.firstName) ? data.firstName : null;
    data.middleName = (data.middleName) ? data.middleName : null;
    data.lastName = (data.lastName) ? data.lastName : null;

    data.isCompany = (data.isCompany) ? data.isCompany : false;
    data.description = (data.description) ? data.description : null;
    data.ssn = (data.ssn) ? data.ssn : null;
    data.company = (data.company) ? data.company : new Company();
    data.prefix = (data.prefix) ? data.prefix : null;

    data.profession = (data.id) ? data.id : null;
    data.status = (data.id) ? data.id : null;
    data.profileType = (data.id) ? data.id : null;
    data.linkedinUrl = (data.id) ? data.id : null;
    data.nickname = (data.id) ? data.id : null;
    data.birthday = (data.id) ? data.id : null;
    data.anniversary = (data.id) ? data.id : null;
    data.gender = (data.id) ? data.id : null;
    data.dependents = (data.id) ? data.id : [];
    data.preferences = (data.id) ? data.id : [];
    data.opportunities = (data.id) ? data.id : [];
    data.orders = (data.id) ? data.id : [];
    data.fops = (data.id) ? data.id : [];
    data.events = (data.id) ? data.id : [];
    data.alerts = (data.id) ? data.id : [];
    data.projects = (data.id) ? data.id : [];
    data.invoices = (data.id) ? data.id : [];
    data.ratings = (data.id) ? data.id : [];
    data.phoneNumbers = (data.id) ? data.id : [];
    data.emailAddresses = (data.id) ? data.id : [];
    data.addresses = (data.id) ? data.id : [];
    data.notes = (data.id) ? data.id : [];

    data.tempScore = (data.id) ? data.id : 0;
    data.systemUser = (data.id) ? data.id : false;
    data.employee = (data.id) ? data.id : false;

    data.billingRate = (data.id) ? data.id : 0;
    data.loginID = (data.id) ? data.id : null;

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
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;

    data.numberOfEmployees = (data.numberOfEmployees) ? data.numberOfEmployees : null;
    data.other = (data.other) ? data.other : null;
    data.phoneNumbers = (data.phoneNumbers) ? data.phoneNumbers : null;
    data.emailAddresses = (data.emailAddresses) ? data.emailAddresses : null;
    data.addresses = (data.addresses) ? data.addresses : null;
    data.sicCode = (data.sicCode) ? data.sicCode : null;
    data.status = (data.status) ? data.status : null;

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
