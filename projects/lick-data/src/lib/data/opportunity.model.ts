import { Section } from './section.model';

export class Opportunity {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public opportunityType?: string;
  public department_id?: string;
  public supplier_id?: string;
  public currentStage?: string;
  public dueDate?;
  public status?: string;
  public source?: string;
  public nextStep?: string;
  public campaign?: string ;
  public probability?;
  public otherAmount?: number;
  public notes?: string;
  public dollarAmount?: number;
  public contact_id?: string;
  public contactName?: string;
  public company_id?: string;

  public publishedAt;
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

    data.opportunityType = (data.opportunityType) ? data.opportunityType : null;
    data.department_id = (data.department_id) ? data.department_id : null;
    data.supplier_id = (data.supplier_id) ? data.supplier_id : null;
    data.currentStage = (data.currentStage) ? data.currentStage : null;
    data.dueDate = (data.dueDate) ? data.dueDate : null;
    data.status = (data.status) ? data.status : null;
    data.source = (data.source) ? data.source : null;
    data.nextStep = (data.nextStep) ? data.nextStep : null;
    data.campaign = (data.campaign) ? data.campaign : null;
    data.probability = (data.probability) ? data.probability : 0;
    data.otherAmount = (data.otherAmount) ? data.otherAmount : 0;
    data.notes = (data.notes) ? data.notes : null;
    data.dollarAmount = (data.dollarAmount) ? data.dollarAmount : 0;
    data.contact_id = (data.contact_id) ? data.contact_id : null;
    data.contactName = (data.contactName) ? data.contactName : null;
    data.company_id = (data.company_id) ? data.company_id : null;

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
