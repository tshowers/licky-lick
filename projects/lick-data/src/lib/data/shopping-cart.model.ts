import { Section } from './section.model';
import { Product } from './product.model';

export class ShoppingCart {
  public $key: string;
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

  public sections?: Array<Section>;
  public publishedAt;

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
  public userImage;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}

export interface IorderLine {
  quantity: number;
  product: Product;

}
