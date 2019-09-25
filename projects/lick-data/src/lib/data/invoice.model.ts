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
}
