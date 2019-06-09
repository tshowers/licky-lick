import { Section } from './section.model';

export class Docuttach  {
  $key: string;
  public id: string;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public isImage?: boolean;
  public contact_id?: string;
  public project_id?;
  public order_id?;
  public event_id?;
  public message_id?;
  public product_id?;
  public catalog_id?;
  public store_id?;

  public doc;

  public publishedAt?;

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
  public userImage;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}
