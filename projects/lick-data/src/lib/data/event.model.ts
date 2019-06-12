import { Section } from './section.model';

export class Event {
  public $key?: string;
  public schedule_id?: string;
  public project_id?: string;
  public title?: string;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public eventType?: string;
  public startDate?;
  public endDate?;
  public color?;
  public actions?;
  public allDay?: boolean;
  public cssClass?: string;
  public resizable?;
  public draggable?: boolean;
  public meta?;
  public startTime?;
  public endTime?;
  public contacts?: Array<any>;
  public attendees?: Array<any>;

  public status?: string;
  public location?: string;
  public requiredStaffing?: number = 0;
  public confirmed?: boolean = false;
  public availableSpaces?: number = 0;
  public costPerPerson?: number = 0;
  public description?: string;
  public recurrence?: Recurrence;

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

export class Recurrence {
  public id?;
  public startDate: Date;
  public endDate: Date
  public every?: number = 0;
  public sunday?: boolean = false;
  public monday?: boolean = false;
  public tuesday?: boolean = false;
  public wednesday?: boolean = false;
  public thursday?: boolean = false;
  public friday?: boolean = false;
  public saturday?: boolean = false;
  public dayOfMonth?;
  public dayOfWeek?;
}
