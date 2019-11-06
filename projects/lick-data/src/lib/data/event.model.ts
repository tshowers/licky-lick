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
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;

    data.schedule_id = (data.schedule_id) ? data.schedule_id : null;
    data.project_id = (data.project_id) ? data.project_id : null;
    data.title = (data.title) ? data.title : null;

    data.eventType = (data.eventType) ? data.eventType : null;
    data.startDate = (data.startDate) ? data.startDate : null;
    data.endDate = (data.endDate) ? data.endDate : null;
    data.color = (data.color) ? data.color : null;
    data.actions = (data.actions) ? data.actions : null;
    data.allDay = (data.allDay) ? data.allDay : false;
    data.cssClass = (data.cssClass) ? data.cssClass : null;
    data.resizable = (data.resizable) ? data.resizable : null;
    data.draggable = (data.draggable) ? data.draggable : false;
    data.meta = (data.meta) ? data.meta : null;
    data.startTime = (data.startTime) ? data.startTime : null;
    data.endTime = (data.endTime) ? data.endTime : null;
    data.contacts = (data.contacts) ? data.contacts : [];
    data.attendees = (data.attendees) ? data.attendees : [];

    data.status = (data.status) ? data.status : null;
    data.location = (data.location) ? data.location : null;
    data.latitude = (data.latitude) ? data.latitude : null;
    data.longitude = (data.longitude) ? data.longitude : null;
    data.requiredStaffing = (data.requiredStaffing) ? data.requiredStaffing : 0;
    data.confirmed = (data.confirmed) ? data.confirmed : false;
    data.availableSpaces = (data.availableSpaces) ? data.availableSpaces : 0;
    data.costPerPerson = (data.costPerPerson) ? data.costPerPerson : 0;
    data.description = (data.description) ? data.description : null;
    data.recurrence = (data.recurrence) ? data.recurrence : null;

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
