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
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;

    data.opportunityType = data.hasOwnProperty('opportunityType') ? data.opportunityType : null;
    data.department_id = data.hasOwnProperty('department_id') ? data.department_id : null;
    data.supplier_id = data.hasOwnProperty('supplier_id') ? data.supplier_id : null;
    data.currentStage = data.hasOwnProperty('currentStage') ? data.currentStage : null;
    data.dueDate = data.hasOwnProperty('dueDate') ? data.dueDate : null;
    data.status = data.hasOwnProperty('status') ? data.status : null;
    data.source = data.hasOwnProperty('source') ? data.source : null;
    data.nextStep = data.hasOwnProperty('nextStep') ? data.nextStep : null;
    data.campaign = data.hasOwnProperty('campaign') ? data.campaign : null;
    data.probability = data.hasOwnProperty('probability') ? data.probability : 0;
    data.otherAmount = data.hasOwnProperty('otherAmount') ? data.otherAmount : 0;
    data.notes = data.hasOwnProperty('notes') ? data.notes : null;
    data.dollarAmount = data.hasOwnProperty('dollarAmount') ? data.dollarAmount : 0;
    data.contact_id = data.hasOwnProperty('contact_id') ? data.contact_id : null;
    data.contactName = data.hasOwnProperty('contactName') ? data.contactName : null;
    data.company_id = data.hasOwnProperty('company_id') ? data.company_id : null;

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
