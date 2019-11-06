import { Section } from './section.model';

export class Order {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public catalog_id?;
  public company_id?;
  public contact_id?;
  public store_id?;
  public shopping_cart_id?;
  public address_id?;
  public fop_id?;
  public shippingRequired?: boolean = false;
  public orderDate?;
  public date?;
  public amount?: number = 0;
  public tax?: number = 0;
  public status? : string;
  public orderLine? : Array<any>;
  public invoices? : Array<any>;

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

    data.catalog_id = (data.catalog_id) ? data.catalog_id : null;
    data.company_id = (data.company_id) ? data.company_id : null;
    data.contact_id = (data.contact_id) ? data.contact_id : null;
    data.store_id = (data.store_id) ? data.store_id : null;
    data.shopping_cart_id = (data.shopping_cart_id) ? data.shopping_cart_id : null;
    data.address_id = (data.address_id) ? data.address_id : null;
    data.fop_id = (data.fop_id) ? data.fop_id : null;
    data.shippingRequired = (data.shippingRequired) ? data.shippingRequired : false;
    data.orderDate = (data.orderDate) ? data.orderDate : null;
    data.date = (data.date) ? data.date : null;
    data.amount = (data.amount) ? data.amount : 0;
    data.tax = (data.tax) ? data.tax : 0;
    data.status = (data.status) ? data.status : null;
    data.orderLine = (data.orderLine) ? data.orderLine : [];
    data.invoices = (data.invoices) ? data.invoices : [];

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
