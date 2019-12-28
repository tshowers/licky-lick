import { Section } from './section.model';

export class FOP  {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public fopType? : string;
  public ccType? : string;
  public ccNumber? : string;
  public expDate? : string;
  public ccv? : string;
  public bankName? : string;
  public bankAccountNumber? : string;
  public bankRoutingNumber? : string;
  public checkNumber? : string;
  public bankCity? : string;
  public bankState? : string;
  public bankPhone? : string;
  public contact_id? : string;
  public company_id?;

  public sections?: Array<Section> = [];
  public lastUpdated;
  public timeStamp;
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

    data.fopType = data.hasOwnProperty('fopType') ? data.fopType : null;
    data.ccType = data.hasOwnProperty('ccType') ? data.ccType : null;
    data.ccNumber = data.hasOwnProperty('ccNumber') ? data.ccNumber : null;
    data.expDate = data.hasOwnProperty('expDate') ? data.expDate : null;
    data.ccv = data.hasOwnProperty('ccv') ? data.ccv : null;
    data.bankName = data.hasOwnProperty('bankName') ? data.bankName : null;
    data.bankAccountNumber = data.hasOwnProperty('bankAccountNumber') ? data.bankAccountNumber : null;
    data.bankRoutingNumber = data.hasOwnProperty('bankRoutingNumber') ? data.bankRoutingNumber : null;
    data.checkNumber = data.hasOwnProperty('checkNumber') ? data.checkNumber : null;
    data.bankCity = data.hasOwnProperty('bankCity') ? data.bankCity : null;
    data.bankState = data.hasOwnProperty('bankState') ? data.bankState : null;
    data.bankPhone = data.hasOwnProperty('bankPhone') ? data.bankPhone : null;
    data.contact_id = data.hasOwnProperty('contact_id') ? data.contact_id : null;
    data.company_id = data.hasOwnProperty('company_id') ? data.company_id : null;

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
