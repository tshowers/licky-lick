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
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;

    data.catalog_id = data.hasOwnProperty('catalog_id') ? data.catalog_id : null;
    data.company_id = data.hasOwnProperty('company_id') ? data.company_id : null;
    data.contact_id = data.hasOwnProperty('contact_id') ? data.contact_id : null;
    data.store_id = data.hasOwnProperty('store_id') ? data.store_id : null;
    data.shopping_cart_id = data.hasOwnProperty('shopping_cart_id') ? data.shopping_cart_id : null;
    data.address_id = data.hasOwnProperty('address_id') ? data.address_id : null;
    data.fop_id = data.hasOwnProperty('fop_id') ? data.fop_id : null;
    data.shippingRequired = data.hasOwnProperty('shippingRequired') ? data.shippingRequired : false;
    data.orderDate = data.hasOwnProperty('orderDate') ? data.orderDate : null;
    data.date = data.hasOwnProperty('date') ? data.date : null;
    data.amount = data.hasOwnProperty('amount') ? data.amount : 0;
    data.tax = data.hasOwnProperty('tax') ? data.tax : 0;
    data.status = data.hasOwnProperty('status') ? data.status : null;
    data.orderLine = data.hasOwnProperty('orderLine') ? data.orderLine : [];
    data.invoices = data.hasOwnProperty('invoices') ? data.invoices : [];

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
