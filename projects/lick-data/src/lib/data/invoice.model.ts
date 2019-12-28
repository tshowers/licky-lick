import { Address } from './address.model';
import { Section } from './section.model';


export class Invoice {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public catalog_id?;
  public contact_id?;
  public order_id?;
  public store_id?;
  public status?: string;
  public date?;
  public shipDate?;
  public shipper?: string;
  public shipperTrackingNumber?: string;
  public shippingCost?;
  public shippingTax?;
  public paid?: boolean = false;
  public address?: Address;
  public notes?: string;

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

    data.catalog_id = data.hasOwnProperty('catalog_id') ? data.catalog_id : null;
    data.contact_id = data.hasOwnProperty('contact_id') ? data.contact_id : null;
    data.order_id = data.hasOwnProperty('order_id') ? data.order_id : null;
    data.store_id = data.hasOwnProperty('store_id') ? data.store_id : null;
    data.status = data.hasOwnProperty('status') ? data.status : null;
    data.date = data.hasOwnProperty('date') ? data.date : null;
    data.shipDate = data.hasOwnProperty('shipDate') ? data.shipDate : null;
    data.shipper = data.hasOwnProperty('shipper') ? data.shipper : null;
    data.shipperTrackingNumber = data.hasOwnProperty('shipperTrackingNumber') ? data.shipperTrackingNumber : null;
    data.shippingCost = data.hasOwnProperty('shippingCost') ? data.shippingCost : null;
    data.shippingTax = data.hasOwnProperty('shippingTax') ? data.shippingTax : null;
    data.paid = data.hasOwnProperty('paid') ? data.paid : false;
    data.address = data.hasOwnProperty('address') ? data.address : null;
    data.notes = data.hasOwnProperty('notes') ? data.notes : null;

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
