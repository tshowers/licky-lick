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
      data.id = data.hasOwnProperty('id') ? data.id : null;
      data.name = data.hasOwnProperty('name') ? data.name : null;
      data.url = data.hasOwnProperty('url') ? data.url : null;
      data.icon = data.hasOwnProperty('icon') ? data.icon : null;
      data.badge = data.hasOwnProperty('badge') ? data.badge : null;
      data.link = data.hasOwnProperty('link') ? data.link : null;
      data.shared = data.hasOwnProperty('shared') ? data.shared : false;

      data.streetAddress = data.hasOwnProperty('streetAddress') ? data.streetAddress : null;
      data.city = data.hasOwnProperty('city') ? data.city : null;
      data.state = data.hasOwnProperty('state') ? data.state : null;
      data.zip = data.hasOwnProperty('zip') ? data.zip : null;
      data.country = data.hasOwnProperty('country') ? data.country : null;
      data.county = data.hasOwnProperty('county') ? data.county : null;
      data.addressType = data.hasOwnProperty('addressType') ? data.addressType : null;
      data.latitude = data.hasOwnProperty('latitude') ? data.latitude : null;
      data.longitude = data.hasOwnProperty('longitude') ? data.longitude : null;

      data.contact_id = data.hasOwnProperty('contact_id') ? data.contact_id : null;
      data.company_id = data.hasOwnProperty('company_id') ? data.company_id : null;

      data.sections = data.hasOwnProperty('sections') ? data.sections : [];

      data.lastUpdated = data.hasOwnProperty('lastUpdated') ? (new Date(data.lastUpdated)) : (new Date());
      data.timeStamp = data.hasOwnProperty('timeStamp') ? new Date(data.timeStamp) : (new Date());
      data.lastUpdatedBy = data.hasOwnProperty('lastUpdatedBy') ? data.lastUpdatedBy : null;
      data.views = data.hasOwnProperty('views') ? data.views : 0;
      data.lastViewed = data.hasOwnProperty('lastViewed') ? new Date(data.lastViewed) : (new Date());

      data.draft = data.hasOwnProperty('draft') ? data.draft : false;
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
