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
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;

    data.contact_id = data.hasOwnProperty('contact_id') ? data.contact_id : null;
    data.company_id = data.hasOwnProperty('company_id') ? data.company_id : null;
    data.catalog_id = data.hasOwnProperty('catalog_id') ? data.catalog_id : null;
    data.store_id = data.hasOwnProperty('store_id') ? data.store_id : null;
    data.status = data.hasOwnProperty('status') ? data.status : null;
    data.authorizationAmount = data.hasOwnProperty('authorizationAmount') ? data.authorizationAmount : null;
    data.requestAmout = data.hasOwnProperty('requestAmout') ? data.requestAmout : null;
    data.confirmationNumber = data.hasOwnProperty('confirmationNumber') ? data.confirmationNumber : null;
    data.processingTime = data.hasOwnProperty('processingTime') ? data.processingTime : null;
    data.date = data.hasOwnProperty('date') ? data.date : null;
    data.paymentMethodCode = data.hasOwnProperty('paymentMethodCode') ? data.paymentMethodCode : null;
    data.paymentLine = data.hasOwnProperty('paymentLine') ? data.paymentLine : new PaymentLine();
    data.paymentAttachment = data.hasOwnProperty('paymentAttachment') ? data.paymentAttachment : new PaymentAttachment();
    data.fromBankAccount = data.hasOwnProperty('fromBankAccount') ? data.fromBankAccount : new FromBankAccount();
    data.check = data.hasOwnProperty('check') ? data.check : new Check();
    data.paypal = data.hasOwnProperty('paypal') ? data.paypal : new Paypal();
    data.approvalCode = data.hasOwnProperty('approvalCode') ? data.approvalCode : null;
    data.creditCardPayment = data.hasOwnProperty('creditCardPayment') ? data.creditCardPayment : new CardPayment();
    data.merchantId = data.hasOwnProperty('merchantId') ? data.merchantId : null;
    data.paymentChannelCode = data.hasOwnProperty('paymentChannelCode') ? data.paymentChannelCode : null;
    data.paymentSource = data.hasOwnProperty('paymentSource') ? data.paymentSource : null;
    data.paymentSchedulingType = data.hasOwnProperty('paymentSchedulingType') ? data.paymentSchedulingType : null;
    data.transactionType = data.hasOwnProperty('transactionType') ? data.transactionType : null;
    data.fopType = data.hasOwnProperty('fopType') ? data.fopType : null;
    data.amount = data.hasOwnProperty('amount') ? data.amount : 0;
    data.reversalIndicator = data.hasOwnProperty('reversalIndicator') ? data.reversalIndicator : false;
    data.authorizationChannel = data.hasOwnProperty('authorizationChannel') ? data.authorizationChannel : null;
    data.pointOfSaleReceiptNumber = data.hasOwnProperty('pointOfSaleReceiptNumber') ? data.pointOfSaleReceiptNumber : null;
    data.manualPaymentIndicator = data.hasOwnProperty('manualPaymentIndicator') ? data.manualPaymentIndicator : false;

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
