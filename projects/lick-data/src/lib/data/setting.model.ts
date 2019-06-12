import { Section } from './section.model';

export class Setting  {
  public $key?: string;
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public step?: number;
  public description?: string;
  public activated?: boolean = false;

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
  public userImage?;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;
}

export interface AppSetting {
  blog?: boolean;
  contact?: boolean;
  document?: boolean;
  email?: boolean;
  project?: boolean;
  commerce?: boolean;
  messaging?: boolean;
  opportunity?: boolean;
  news?: boolean;
  help?: boolean;
  calendar?: boolean;
  timecard?: boolean;
  mylan?: boolean;
  favorite?: boolean;
  history?: boolean;
  concierge?: boolean;
}
