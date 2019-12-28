import { Section } from './section.model';

export class Event {
  public id?: string;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public schedule_id?: string;
  public project_id?: string;
  public title?: string;

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
  public latitude?: number;
  public longitude?: number;
  public requiredStaffing?: number = 0;
  public confirmed?: boolean = false;
  public availableSpaces?: number = 0;
  public costPerPerson?: number = 0;
  public description?: string;
  public recurrence?: Recurrence;

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

    data.schedule_id = data.hasOwnProperty('schedule_id') ? data.schedule_id : null;
    data.project_id = data.hasOwnProperty('project_id') ? data.project_id : null;
    data.title = data.hasOwnProperty('title') ? data.title : null;

    data.eventType = data.hasOwnProperty('eventType') ? data.eventType : null;
    data.startDate = data.hasOwnProperty('startDate') ? data.startDate : null;
    data.endDate = data.hasOwnProperty('endDate') ? data.endDate : null;
    data.color = data.hasOwnProperty('color') ? data.color : null;
    data.actions = data.hasOwnProperty('actions') ? data.actions : null;
    data.allDay = data.hasOwnProperty('allDay') ? data.allDay : false;
    data.cssClass = data.hasOwnProperty('cssClass') ? data.cssClass : null;
    data.resizable = data.hasOwnProperty('resizable') ? data.resizable : null;
    data.draggable = data.hasOwnProperty('draggable') ? data.draggable : false;
    data.meta = data.hasOwnProperty('meta') ? data.meta : null;
    data.startTime = data.hasOwnProperty('startTime') ? data.startTime : null;
    data.endTime = data.hasOwnProperty('endTime') ? data.endTime : null;
    data.contacts = data.hasOwnProperty('contacts') ? data.contacts : [];
    data.attendees = data.hasOwnProperty('attendees') ? data.attendees : [];

    data.status = data.hasOwnProperty('status') ? data.status : null;
    data.location = data.hasOwnProperty('location') ? data.location : null;
    data.latitude = data.hasOwnProperty('latitude') ? data.latitude : null;
    data.longitude = data.hasOwnProperty('longitude') ? data.longitude : null;
    data.requiredStaffing = data.hasOwnProperty('requiredStaffing') ? data.requiredStaffing : 0;
    data.confirmed = data.hasOwnProperty('confirmed') ? data.confirmed : false;
    data.availableSpaces = data.hasOwnProperty('availableSpaces') ? data.availableSpaces : 0;
    data.costPerPerson = data.hasOwnProperty('costPerPerson') ? data.costPerPerson : 0;
    data.description = data.hasOwnProperty('description') ? data.description : null;
    data.recurrence = data.hasOwnProperty('recurrence') ? data.recurrence : null;

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
