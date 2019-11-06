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
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;

    data.title = (data.title) ? data.title : null;
    data.catalog_id = (data.catalog_id) ? data.catalog_id : null;
    data.product_id = (data.product_id) ? data.product_id : null;
    data.store_id = (data.store_id) ? data.store_id : null;
    data.type = (data.type) ? data.type : null;
    data.description = (data.description) ? data.description : null;
    data.longDescription = (data.longDescription) ? data.longDescription : null;
    data.providerTag = (data.providerTag) ? data.providerTag : null;
    data.placement = (data.placement) ? data.placement : null;
    data.presentationMethod = (data.presentationMethod) ? data.presentationMethod : null;
    data.category = (data.category) ? data.category : null;
    data.attributes = (data.attributes) ? data.attributes : null;

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
