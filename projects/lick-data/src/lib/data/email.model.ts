import { EmailAddress } from './email-address.model';
import { Section } from './section.model';


export class Email  {
  public id?;
  public subject: string;
  public message: string

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public toAddresses?: Array<any>;
  public fromAddress?: EmailAddress;
  public fromFriendlyName?: string ;
  public messageType?;
  public attachments?: Array<any>;
  public answered?: boolean = false;
  public blindCopyAddresses?: Array<any>;
  public copyAddresses?: Array<any>;
  public multipart?: boolean = false;
  public seen?: boolean = false;
  public size?: number = 0;
  public spam?: boolean = false;
  public replyEmail?: Email;
  public forwardEmail?: Email;
  public emailFlag;

  public contact_id;

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
