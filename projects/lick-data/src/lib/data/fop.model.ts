import { Section } from './section.model';

export class FOP  {
  public $key: string;
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public fopType? : string;
  public ccType? : string;
  public ccNumber? : string;
  public expDate? : string;
  public ccv? : string;
  public bankName? : string;
  public bankAccountNumber? : string;
  public bankRoutingNumber? : string;
  public checkNumber? : string;
  public bankCity? : string;
  public bankState? : string;
  public bankPhone? : string;
  public contact_id? : string;
  public company_id?;

  public sections?: Array<Section> = [];
  public lastUpdated;
  public timeStamp;
  public lastUpdatedBy?;
  public views?: number;
  public lastViewed?;

  public draft?: boolean = true;
  public deleted?: boolean = false;
  public keywords?;

  public user_id?;
  public userName?;
  public userImage;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}
