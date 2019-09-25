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
