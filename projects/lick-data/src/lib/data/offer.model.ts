import { Section } from './section.model';

export class Offer {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public title?: string;
  public catalog_id?;
  public product_id?;
  public store_id?;
  public type?: string;
  public description?: string;
  public longDescription?: string;
  public expirationDate?;
  public providerTag?: string;
  public placement?: string;
  public presentationMethod?: string;
  public category?: string;
  public attributes?;

  public publishedAt;

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

    data.title = data.hasOwnProperty('title') ? data.title : null;
    data.catalog_id = data.hasOwnProperty('catalog_id') ? data.catalog_id : null;
    data.product_id = data.hasOwnProperty('product_id') ? data.product_id : null;
    data.store_id = data.hasOwnProperty('store_id') ? data.store_id : null;
    data.type = data.hasOwnProperty('type') ? data.type : null;
    data.description = data.hasOwnProperty('description') ? data.description : null;
    data.longDescription = data.hasOwnProperty('longDescription') ? data.longDescription : null;
    data.providerTag = data.hasOwnProperty('providerTag') ? data.providerTag : null;
    data.placement = data.hasOwnProperty('placement') ? data.placement : null;
    data.presentationMethod = data.hasOwnProperty('presentationMethod') ? data.presentationMethod : null;
    data.category = data.hasOwnProperty('category') ? data.category : null;
    data.attributes = data.hasOwnProperty('attributes') ? data.attributes : null;

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
