import { Section } from './section.model';

export class Goal {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public goalYear?: number;
  public description?: string;
  public revenueGoal?: TimeGoal;
  public contactGoal?: TimeGoal;
  public orderGoal?: TimeGoal;
  public eventGoal?: TimeGoal;
  public projectGoal?: TimeGoal;
  public blogGoal?: TimeGoal;
  public messageGoal?: TimeGoal;
  public taskGoal?: TimeGoal;
  public paymentGoal?: TimeGoal;
  public opportunityGoal?: TimeGoal;
  public shoppingCartGoal?: TimeGoal;

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
  public userImage?;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;
}

export class TimeGoal {
  constructor(public oneMonth: number,
    public threeMonth: number,
    public sixMonth: number,
    public year: number) { }

}
