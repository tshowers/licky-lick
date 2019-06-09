import { Section } from './section.model';

export class Upload {
  public $key: string;
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public file: File;

  public originalName: string;
  public byteSize: number;

  public ref?;

  public article_id?;
  public group_id?;
  public carousel_id?;
  public featurette_id?;
  public parallax_id?;
  public service_box_id?;
  public product_bundle_id?;
  public contact_id?;
  public project_id?;
  public property_id?;
  public order_id?;
  public help_id?;
  public event_id?;
  public message_id?;
  public product_id?;
  public catalog_id?;
  public topic_id?;
  public store_id?;
  public offer_id?;
  public progress?: number;

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

  constructor(file: File) {
    this.file = file;
  }

}
