import { Section } from './section.model';

export class Address {
  public id?: string;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public streetAddress: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public county?: string;
  public addressType?: string;
  public latitude?: number;
  public longitude?: number;

  public contact_id?: string;
  public company_id?: string;

  public sections?: Array<Section> = [];

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

      data.streetAddress = (data.streetAddress) ? data.streetAddress : null;
      data.city = (data.city) ? data.city : null;
      data.state = (data.state) ? data.state : null;
      data.zip = (data.zip) ? data.zip : null;
      data.country = (data.country) ? data.country : null;
      data.county = (data.county) ? data.county : null;
      data.addressType = (data.addressType) ? data.addressType : null;
      data.latitude = (data.latitude) ? data.latitude : null;
      data.longitude = (data.longitude) ? data.longitude : null;

      data.contact_id = (data.contact_id) ? data.contact_id : null;
      data.company_id = (data.company_id) ? data.company_id : null;

      data.sections = (data.sections) ? data.sections : [];

      data.lastUpdated = (data.lastUpdated) ? (new Date(data.lastUpdated)) : (new Date());
      data.timeStamp = (data.timeStamp) ? new Date(data.timeStamp) : (new Date());
      data.lastUpdatedBy = (data.lastUpdatedBy) ? data.lastUpdatedBy : null;
      data.views = (data.views) ? data.views : 0;
      data.lastViewed = (data.lastViewed) ? new Date(data.lastViewed) : (new Date());

      data.draft = (data.draft) ? data.draft : false;
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
