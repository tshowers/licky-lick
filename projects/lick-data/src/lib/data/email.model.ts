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
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.url = (data.url) ? data.url : null;
    data.icon = (data.icon) ? data.icon : null;
    data.badge = (data.badge) ? data.badge : null;
    data.link = (data.link) ? data.link : null;
    data.shared = (data.shared) ? data.shared : false;

    data.subject = (data.subject) ? data.subject : null;
    data.message = (data.message) ? data.message : null;
    data.toAddresses = (data.toAddresses) ? data.toAddresses : [];
    data.fromAddress = (data.fromAddress) ? data.fromAddress : null;
    data.fromFriendlyName = (data.fromFriendlyName) ? data.fromFriendlyName : null;
    data.messageType = (data.messageType) ? data.messageType : null;
    data.attachments = (data.attachments) ? data.attachments : [];
    data.answered = (data.answered) ? data.answered : false;
    data.blindCopyAddresses = (data.blindCopyAddresses) ? data.blindCopyAddresses : [];
    data.copyAddresses = (data.copyAddresses) ? data.copyAddresses : [];
    data.multipart = (data.multipart) ? data.multipart : false;
    data.seen = (data.seen) ? data.seen : false;
    data.size = (data.size) ? data.size : 0;
    data.spam = (data.spam) ? data.spam : false;
    data.replyEmail = (data.replyEmail) ? data.replyEmail : null;
    data.forwardEmail = (data.forwardEmail) ? data.forwardEmail : null;
    data.emailFlag = (data.emailFlag) ? data.emailFlag : null;

    data.contact_id = (data.contact_id) ? data.contact_id : null;

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
