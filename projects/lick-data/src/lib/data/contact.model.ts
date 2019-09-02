import { Section } from './section.model';

export class Contact {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public firstName: string;
  public middleName?: string;
  public lastName: string;

  public isCompany?: boolean = false;

  public ssn?: string;
  public company?: Company = new Company();
  public prefix?: string;

  public profession?: string;
  public status?: string;
  public profileType?: string;
  public linkedinUrl?: string;
  public nickname?: string;
  public birthday?: string;
  public anniversary?: any = null;
  public gender?: string;
  public dependents?: Array<any> = [];
  public preferences?: Array<any> = [];
  public opportunities?: Array<any> = [];
  public orders?: Array<any> = [];
  public fops?: Array<any> = [];
  public events?: Array<any> = [];
  public alerts?: Array<any> = [];
  public projects?: Array<any> = [];
  public invoices?: Array<any> = [];
  public ratings?: Array<any> = [];
  public phoneNumbers?: Array<any> = [];
  public emailAddresses?: Array<any> = [];
  public addresses?: Array<any> = [];
  public notes?: Array<any> = [];

  public tempScore?: number = 0;
  public systemUser?: boolean = false;
  public employee?: boolean = false;

  public billingRate?: number = 0;
  public loginID?: string;

  public sections?: Array<Section> = [];
  public lastUpdated?;
  public timeStamp?;
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

export class Dependent {
  public firstName;
  public lastName;
  public relationship;
  public sections?: Array<Section> = [];
  public lastUpdated;
  public timeStamp;
  public lastUpdatedBy?;
  public lastViewed?;
}

export class Company {
  public id?;
  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared?: boolean = true;


  public numberOfEmployees?: string;
  public other?: string;
  public phoneNumbers?: Array<any> = [];
  public emailAddresses?: Array<any> = [];
  public addresses?: Array<any> = [];
  public sicCode?: string;
  public status?: string;

  public sections?: Array<Section> = [];
  public lastUpdated?;
  public timeStamp?;
  public lastUpdatedBy?;
  public views?: number;
  public lastViewed?;

  public draft?: boolean = true;
  public deleted?: boolean = false;
  public keywords?;

  public user_id?;
  public userName?;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}
