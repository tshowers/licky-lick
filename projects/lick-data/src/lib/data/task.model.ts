import { TaTime } from './ta-date.model';
import { Section } from './section.model';

export class Task  {
  public $key?: string;
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;


  public dueDate?;
  public type?;
  public even?: boolean = false;
  public assignedToName?;
  public assigned_to_id?: string;

  public isPastDate?: boolean = false;
  public project_id?: string;
  public description?: string;
  public status?: string;
  public timeToComplete? : TaTime;
  public timerEndTime?;
  public timerStartTime?;
  public started?: boolean = false;

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
