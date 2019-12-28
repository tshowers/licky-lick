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
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;


    data.dueDate = data.hasOwnProperty('dueDate') ? data.dueDate : null;
    data.type = data.hasOwnProperty('type') ? data.type : null;
    data.even = data.hasOwnProperty('even') ? data.even : false;
    data.assignedToName = data.hasOwnProperty('assignedToName') ? data.assignedToName : null;
    data.assigned_to_id = data.hasOwnProperty('assigned_to_id') ? data.assigned_to_id : null;

    data.isPastDate = data.hasOwnProperty('isPastDate') ? data.isPastDate : false;
    data.project_id = data.hasOwnProperty('project_id') ? data.project_id : null;
    data.description = data.hasOwnProperty('description') ? data.description : null;
    data.status = data.hasOwnProperty('status') ? data.status : null;
    data.timeToComplete = data.hasOwnProperty('timeToComplete') ? data.timeToComplete : null;
    data.timerEndTime = data.hasOwnProperty('timerEndTime') ? data.timerEndTime : null;
    data.timerStartTime = data.hasOwnProperty('timerStartTime') ? data.timerStartTime : null;
    data.started = data.hasOwnProperty('started') ? data.started : false;

    data.publishedAt = data.hasOwnProperty('publishedAt') ? data.publishedAt : null;

    data.sections = data.hasOwnProperty('sections') ? data.sections : [];

    data.lastUpdated = data.hasOwnProperty('lastUpdated') ? data.lastUpdated : null;
    data.timeStamp = data.hasOwnProperty('timeStamp') ? data.timeStamp : null;
    data.lastUpdatedBy = data.hasOwnProperty('lastUpdatedBy') ? data.lastUpdatedBy : null;
    data.views = data.hasOwnProperty('views') ? data.views : 0;
    data.lastViewed = data.hasOwnProperty('lastViewed') ? data.lastViewed : null;

    data.draft = data.hasOwnProperty('draft') ? data.draft : true;
    data.deleted = data.hasOwnProperty('deleted') ? data.deleted : false;
    data.keywords = data.hasOwnProperty('keywords') ? data.keywords : null;

    data.user_id = data.hasOwnProperty('user_id') ? data.user_id : null;
    data.userName = data.hasOwnProperty('userName') ? data.userName : null;
    data.userImage = data.hasOwnProperty('userImage') ? data.userImage : null;

    data.bookmarked = data.hasOwnProperty('bookmarked') ? data.bookmarked : false;
    data.bookmarkedCount = data.hasOwnProperty('bookmarkedCount') ? data.bookmarkedCount : 0;
    data.favored = data.hasOwnProperty('favored') ? data.favored : false;
    data.favoredCount = data.hasOwnProperty('favoredCount') ? data.favoredCount : 0;
    data.broadcasted = data.hasOwnProperty('broadcasted') ? data.broadcasted : false;
    data.broadcastedCount = data.hasOwnProperty('broadcastedCount') ? data.broadcastedCount : 0;
  }
}
