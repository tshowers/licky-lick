import { Section } from './section.model';
import { Product } from './product.model';

export class ShoppingCart {
  id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public orderLine?: IorderLine[];
  public store_id?;
  public storeName?;
  public contact_id?;
  public address_id?;
  public fop_id?;
  public invoice_id?;
  public shippingRequired?: boolean = false;
  public productViewHistory = [];

  public publishedAt;
  public sections?: Array<Section>;

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

    data.orderLine = (data.orderLine) ? data.orderLine : [];
    data.store_id = (data.store_id) ? data.store_id : null;
    data.storeName = (data.storeName) ? data.storeName : null;
    data.contact_id = (data.contact_id) ? data.contact_id : null;
    data.address_id = (data.address_id) ? data.address_id : null;
    data.fop_id = (data.fop_id) ? data.fop_id : null;
    data.invoice_id = (data.invoice_id) ? data.invoice_id : null;
    data.shippingRequired = (data.shippingRequired) ? data.shippingRequired : false;
    data.productViewHistory = (data.productViewHistory) ? data.productViewHistory : [];

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

export interface IorderLine {
  quantity: number;
  product: Product;

}
