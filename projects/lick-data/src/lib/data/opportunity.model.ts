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

  public sections?: Array<Section> = [];
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
