import { TaTime } from './ta-date.model';
import { Section } from './section.model';

export class Task {
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
  public timeToComplete?: TaTime;
  public timerEndTime?;
  public timerStartTime?;
  public started?: boolean = false;

  public publishedAt;
  public sections?: Array<Section>;

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

  static restoreData(data: any): void {
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;


    data.dueDate = (data.dueDate) ? data.dueDate : null;
    data.type = (data.type) ? data.type : null;
    data.even = (data.even) ? data.even : false;
    data.assignedToName = (data.assignedToName) ? data.assignedToName : null;
    data.assigned_to_id = (data.assigned_to_id) ? data.assigned_to_id : null;

    data.isPastDate = (data.isPastDate) ? data.isPastDate : false;
    data.project_id = (data.project_id) ? data.project_id : null;
    data.description = (data.description) ? data.description : null;
    data.status = (data.status) ? data.status : null;
    data.timeToComplete = (data.timeToComplete) ? data.timeToComplete : null;
    data.timerEndTime = (data.timerEndTime) ? data.timerEndTime : null;
    data.timerStartTime = (data.timerStartTime) ? data.timerStartTime : null;
    data.started = (data.started) ? data.started : false;

    data.publishedAt = (data.publishedAt) ? data.publishedAt : null;

    data.sections = (data.sections) ? data.sections : [];

    data.lastUpdated = (data.lastUpdated) ? data.lastUpdated : null;
    data.timeStamp = (data.timeStamp) ? data.timeStamp : null;
    data.lastUpdatedBy = (data.lastUpdatedBy) ? data.lastUpdatedBy : null;
    data.views = (data.views) ? data.views : 0;
    data.lastViewed = (data.lastViewed) ? data.lastViewed : null;

    data.draft = (data.draft) ? data.draft : true;
    data.deleted = (data.deleted) ? data.deleted : false;
    data.keywords = (data.keywords) ? data.keywords : null;

    data.user_id = (data.user_id) ? data.user_id : null;
    data.userName = (data.userName) ? data.userName : null;
    data.userImage = (data.userImage) ? data.userImage : null;

    data.bookmarked = (data.bookmarked) ? data.bookmarked : false;
    data.bookmarkedCount = (data.bookmarkedCount) ? data.bookmarkedCount : 0;
    data.favored = (data.favored) ? data.favored : false;
    data.favoredCount = (data.favoredCount) ? data.favoredCount : 0;
    data.broadcasted = (data.broadcasted) ? data.broadcasted : false;
    data.broadcastedCount = (data.broadcastedCount) ? data.broadcastedCount : 0;
  }
}
