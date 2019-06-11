import { Section } from './section.model';
import { Company } from './contact.model';

export class Review  {
  public $key: string;
  public id?;
  public stars  = [];
  public description?;
  public company? : Company;

  public profession?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

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
