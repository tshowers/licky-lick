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
}
