import { Section } from './section.model';

export class Project  {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public projectType?: string;
  public status?: string;
  public sections?: Array<Section> = [];
  public startDate?;
  public endDate?;
  public billingEstimate?: number;
  public description?: string;
  public purchaseOrderNumber?: string;

  public events?: Array<any> = [];
  public milestones?: Array<Milestone> = [];
  public requirements?: Array<Requirement> = [];
  public affectedParties?: Array<AffectedParty> = [];
  public implementationPlans?: Array<ImplementationPlan> = [];
  public affectedSystems?: Array<AffectedSystem> = [];
  public approvals?: Array<Approval> = [];

  public sponsor?: string;
  public sponsorType?: string;
  public summaryOfBudget?: string;
  public projectManager?: string;
  public projectManagerName?;
  public responsibilities?: string;
  public purpose?: string;
  public contact_id?;
  public company_id?;
  public percentTimeComplete;

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

export class Milestone {
  public id?;
  public title?: string;
  public date?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public description?: string;
  public sections?: Array<Section> = [];
  public project_id?;

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

export class Requirement {
  public id?;
  public project_id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;


  public description?;
  public sections?: Array<Section> = [];
  public requirementStatus?;

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

export class Deliverable {
  public id?;
  public project_id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public deliverableStatus?;
  public category?;
  public sections?: Array<Section> = [];
  public description?;

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

export class AffectedParty {
  public id?;
  public project_id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public description?;
  public sections?: Array<Section> = [];
  public affectedPartyType?;

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

export class AffectedSystem {
  id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  project_id?;

  description?;
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

export class ImplementationPlan {
  public id?;
  public project_id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public description?;
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
export class Bug {
  public id?;
  public project_id?;
  public deliverable_id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;


  public description?;
  public currentState?;
  public proposedSolution?;
  public bugStatus?;
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


export class ProjectReport {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public project_id?;
  public report_version?: number = 0;
  public status?;

  public sections?: Array<Section>;
  public description?;

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

export class Approval  {
  public id?;
  public project_id?;

  public approvalDate;
  public approver;
  public approverName;

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
