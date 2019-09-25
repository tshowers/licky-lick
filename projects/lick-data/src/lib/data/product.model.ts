import { Section } from './section.model';

export class Product {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public catalog_id?;
  public store_id?;
  public discontinued?: boolean = false;
  public features?;
  public deliverable_id?: string;
  public description? : string;
  public longDescription? : string;
  public manufacturer? : string;
  public author? : string;
  public category? : string;
  public leadTime?: number = 0;
  public onSale?: boolean = false;
  public salePrice?: number = 0;
  public orderQuantity?: number = 0;
  public orderQuantityMeasure?: string;
  public price?: number = 0;
  public hourlyRate?;
  public reOrderLevel?: number = 0;
  public sku? : string;
  public subscription?: boolean = false;
  public weight?: number = 0;
  public height?: number = 0;
  public width?: number = 0;
  public length?: number = 0;
  public unitsOnOrder?: number = 0;
  public unitsInStock?: number = 0;

  public sections?: Array<Section> = [];
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
  public userImage?;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}
