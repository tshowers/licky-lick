import { Section } from './section.model';

export class Payment {
  public id?;

  public contact_id?;
  public company_id?;
  public catalog_id?;
  public store_id?;
  public status?: string;
  public authorizationAmount?: number;
  public requestAmout?: number;
  public confirmationNumber?: string;
  public processingTime?: string;
  public date?;
  public paymentMethodCode?: string;
  public paymentLine?: PaymentLine;
  public paymentAttachment?: PaymentAttachment;
  public fromBankAccount?: FromBankAccount;
  public check?: Check;
  public paypal?: Paypal;
  public approvalCode?: string;
  public creditCardPayment?: CardPayment;
  public merchantId?: string;
  public paymentChannelCode?: string;
  public paymentSource?: string;
  public paymentSchedulingType?: string;
  public transactionType?: string;
  public fopType?: string;
  public amount?: number = 0;
  public reversalIndicator?: boolean = false;
  public authorizationChannel?: string;
  public pointOfSaleReceiptNumber?: string;
  public manualPaymentIndicator?: boolean = false;

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

    data.contact_id = (data.contact_id) ? data.contact_id : null;
    data.company_id = (data.company_id) ? data.company_id : null;
    data.catalog_id = (data.catalog_id) ? data.catalog_id : null;
    data.store_id = (data.store_id) ? data.store_id : null;
    data.status = (data.status) ? data.status : null;
    data.authorizationAmount = (data.authorizationAmount) ? data.authorizationAmount : null;
    data.requestAmout = (data.requestAmout) ? data.requestAmout : null;
    data.confirmationNumber = (data.confirmationNumber) ? data.confirmationNumber : null;
    data.processingTime = (data.processingTime) ? data.processingTime : null;
    data.date = (data.date) ? data.date : null;
    data.paymentMethodCode = (data.paymentMethodCode) ? data.paymentMethodCode : null;
    data.paymentLine = (data.paymentLine) ? data.paymentLine : new PaymentLine();
    data.paymentAttachment = (data.paymentAttachment) ? data.paymentAttachment : new PaymentAttachment();
    data.fromBankAccount = (data.fromBankAccount) ? data.fromBankAccount : new FromBankAccount();
    data.check = (data.check) ? data.check : new Check();
    data.paypal = (data.paypal) ? data.paypal : new Paypal();
    data.approvalCode = (data.approvalCode) ? data.approvalCode : null;
    data.creditCardPayment = (data.creditCardPayment) ? data.creditCardPayment : new CardPayment();
    data.merchantId = (data.merchantId) ? data.merchantId : null;
    data.paymentChannelCode = (data.paymentChannelCode) ? data.paymentChannelCode : null;
    data.paymentSource = (data.paymentSource) ? data.paymentSource : null;
    data.paymentSchedulingType = (data.paymentSchedulingType) ? data.paymentSchedulingType : null;
    data.transactionType = (data.transactionType) ? data.transactionType : null;
    data.fopType = (data.fopType) ? data.fopType : null;
    data.amount = (data.amount) ? data.amount : 0;
    data.reversalIndicator = (data.reversalIndicator) ? data.reversalIndicator : false;
    data.authorizationChannel = (data.authorizationChannel) ? data.authorizationChannel : null;
    data.pointOfSaleReceiptNumber = (data.pointOfSaleReceiptNumber) ? data.pointOfSaleReceiptNumber : null;
    data.manualPaymentIndicator = (data.manualPaymentIndicator) ? data.manualPaymentIndicator : false;

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

export class Paypal {
  id?;
}

export class PaymentLine {
  id?;
  creditIndicator: boolean = false;
  allocationTypeCode: string;
  allocationAmount: number;
  description: string;
  financialAccountNumber: string;

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

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}

export class PaymentAttachment {
  id?;
  typeCode: string;
  name: string;
  title: string;
  URI: string;
  description: string;

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

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}

export class FromBankAccount {
  id?;
  accountNumber: number = 0;
  bankName: string;
  routingNumber: number = 0;

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

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}

export class Check {
  id?;
  accountHolderName: string;
  bankName: string;
  accountNumber: number = 0;
  routingNumber: number = 0;
  checkNumber: number = 0;

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

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}
export class CardPayment {
  id?;
  traceNumber: string;
  cardType: string;
  cardNumber: number = 0;
  cardHolderName: string;
  expirationMonthYear: string;

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

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}
