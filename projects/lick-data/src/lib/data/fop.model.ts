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
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;

    data.fopType = (data.fopType) ? data.fopType : null;
    data.ccType = (data.ccType) ? data.ccType : null;
    data.ccNumber = (data.ccNumber) ? data.ccNumber : null;
    data.expDate = (data.expDate) ? data.expDate : null;
    data.ccv = (data.ccv) ? data.ccv : null;
    data.bankName = (data.bankName) ? data.bankName : null;
    data.bankAccountNumber = (data.bankAccountNumber) ? data.bankAccountNumber : null;
    data.bankRoutingNumber = (data.bankRoutingNumber) ? data.bankRoutingNumber : null;
    data.checkNumber = (data.checkNumber) ? data.checkNumber : null;
    data.bankCity = (data.bankCity) ? data.bankCity : null;
    data.bankState = (data.bankState) ? data.bankState : null;
    data.bankPhone = (data.bankPhone) ? data.bankPhone : null;
    data.contact_id = (data.contact_id) ? data.contact_id : null;
    data.company_id = (data.company_id) ? data.company_id : null;

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
