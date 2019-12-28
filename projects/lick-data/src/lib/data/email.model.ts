import { EmailAddress } from './email-address.model';
import { Section } from './section.model';


export class Email  {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public subject: string;
  public message: string
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

  static restoreData(data: any): void {
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;

    data.subject = data.hasOwnProperty('subject') ? data.subject : null;
    data.message = data.hasOwnProperty('message') ? data.message : null;
    data.toAddresses = data.hasOwnProperty('toAddresses') ? data.toAddresses : [];
    data.fromAddress = data.hasOwnProperty('fromAddress') ? data.fromAddress : null;
    data.fromFriendlyName = data.hasOwnProperty('fromFriendlyName') ? data.fromFriendlyName : null;
    data.messageType = data.hasOwnProperty('messageType') ? data.messageType : null;
    data.attachments = data.hasOwnProperty('attachments') ? data.attachments : [];
    data.answered = data.hasOwnProperty('answered') ? data.answered : false;
    data.blindCopyAddresses = data.hasOwnProperty('blindCopyAddresses') ? data.blindCopyAddresses : [];
    data.copyAddresses = data.hasOwnProperty('copyAddresses') ? data.copyAddresses : [];
    data.multipart = data.hasOwnProperty('multipart') ? data.multipart : false;
    data.seen = data.hasOwnProperty('seen') ? data.seen : false;
    data.size = data.hasOwnProperty('size') ? data.size : 0;
    data.spam = data.hasOwnProperty('spam') ? data.spam : false;
    data.replyEmail = data.hasOwnProperty('replyEmail') ? data.replyEmail : null;
    data.forwardEmail = data.hasOwnProperty('forwardEmail') ? data.forwardEmail : null;
    data.emailFlag = data.hasOwnProperty('emailFlag') ? data.emailFlag : null;

    data.contact_id = data.hasOwnProperty('contact_id') ? data.contact_id : null;

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
