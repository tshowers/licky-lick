import { Section } from './section.model';

export class Upload {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public file: File;

  public originalName: string;
  public byteSize: number;

  public ref?;

  public article_id?;
  public group_id?;
  public carousel_id?;
  public featurette_id?;
  public parallax_id?;
  public service_box_id?;
  public product_bundle_id?;
  public contact_id?;
  public project_id?;
  public property_id?;
  public order_id?;
  public help_id?;
  public event_id?;
  public message_id?;
  public product_id?;
  public catalog_id?;
  public topic_id?;
  public store_id?;
  public offer_id?;
  public payment_id?;
  public progress?: number;

  public publishedAt;
  public sections?: Array<Section>;

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

  constructor(file: File) {
    this.file = file;
  }

  static restoreData(data: any): void {
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;

    data.file = data.hasOwnProperty('file') ? data.file : null;

    data.originalName = data.hasOwnProperty('originalName') ? data.originalName : null;
    data.byteSize = data.hasOwnProperty('byteSize') ? data.byteSize : 0;

    data.ref = data.hasOwnProperty('ref') ? data.ref : null;

    data.article_id = data.hasOwnProperty('article_id') ? data.article_id : null;
    data.group_id = data.hasOwnProperty('group_id') ? data.group_id : null;
    data.carousel_id = data.hasOwnProperty('carousel_id') ? data.carousel_id : null;
    data.featurette_id = data.hasOwnProperty('featurette_id') ? data.featurette_id : null;
    data.parallax_id = data.hasOwnProperty('parallax_id') ? data.parallax_id : null;
    data.service_box_id = data.hasOwnProperty('service_box_id') ? data.service_box_id : null;
    data.product_bundle_id = data.hasOwnProperty('product_bundle_id') ? data.product_bundle_id : null;
    data.contact_id = data.hasOwnProperty('contact_id') ? data.contact_id : null;
    data.project_id = data.hasOwnProperty('project_id') ? data.project_id : null;
    data.property_id = data.hasOwnProperty('property_id') ? data.property_id : null;
    data.order_id = data.hasOwnProperty('order_id') ? data.order_id : null;
    data.help_id = data.hasOwnProperty('help_id') ? data.help_id : null;
    data.event_id = data.hasOwnProperty('event_id') ? data.event_id : null;
    data.message_id = data.hasOwnProperty('message_id') ? data.message_id : null;
    data.product_id = data.hasOwnProperty('product_id') ? data.product_id : null;
    data.catalog_id = data.hasOwnProperty('catalog_id') ? data.catalog_id : null;
    data.topic_id = data.hasOwnProperty('topic_id') ? data.topic_id : null;
    data.store_id = data.hasOwnProperty('store_id') ? data.store_id : null;
    data.offer_id = data.hasOwnProperty('offer_id') ? data.offer_id : null;
    data.progress = data.hasOwnProperty('progress') ? data.progress : null;

    data.publishedAt = data.hasOwnProperty('publishedAt') ? data.publishedAt : null;

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
