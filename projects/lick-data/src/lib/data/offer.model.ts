import { Section } from './section.model';

export class Offer {
  public id?;
  public title?: string;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

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
}
