import { Section } from './section.model';

export class Product {
  public id?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = true;

  public catalog_id?;
  public store_id?;
  public discontinued?: boolean = false;
  public features?;
  public deliverable_id?: string;
  public description? : string;
  public longDescription? : string;
  public manufacturer? : string;
  public author? : string;
  public category? : string;
  public leadTime?: number = 0;
  public onSale?: boolean = false;
  public salePrice?: number = 0;
  public orderQuantity?: number = 0;
  public orderQuantityMeasure?: string;
  public price?: number = 0;
  public hourlyRate?;
  public reOrderLevel?: number = 0;
  public sku? : string;
  public subscription?: boolean = false;
  public weight?: number = 0;
  public height?: number = 0;
  public width?: number = 0;
  public length?: number = 0;
  public unitsOnOrder?: number = 0;
  public unitsInStock?: number = 0;
  public publishedAt;

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

    data.catalog_id = (data.catalog_id) ? data.catalog_id : null;
    data.store_id = (data.store_id) ? data.store_id : null;
    data.discontinued = (data.discontinued) ? data.discontinued : false;
    data.features = (data.features) ? data.features : null;
    data.deliverable_id = (data.deliverable_id) ? data.deliverable_id : null;
    data.description = (data.description) ? data.description : null;
    data.longDescription = (data.longDescription) ? data.longDescription : null;
    data.manufacturer = (data.manufacturer) ? data.manufacturer : null;
    data.author = (data.author) ? data.author : null;
    data.category = (data.category) ? data.category : null;
    data.leadTime = (data.leadTime) ? data.leadTime : 0;
    data.onSale = (data.onSale) ? data.onSale : false;
    data.salePrice = (data.salePrice) ? data.salePrice : 0;
    data.orderQuantity = (data.orderQuantity) ? data.orderQuantity : 0;
    data.orderQuantityMeasure = (data.orderQuantityMeasure) ? data.orderQuantityMeasure : null;
    data.price = (data.price) ? data.price : 0;
    data.hourlyRate = (data.hourlyRate) ? data.hourlyRate : 0;
    data.reOrderLevel = (data.reOrderLevel) ? data.reOrderLevel : 0;
    data.sku = (data.sku) ? data.sku : null;
    data.subscription = (data.subscription) ? data.subscription : false;
    data.weight = (data.weight) ? data.weight : 0;
    data.height = (data.height) ? data.height : 0;
    data.width = (data.width) ? data.width : 0;
    data.length = (data.length) ? data.length : 0;
    data.unitsOnOrder = (data.unitsOnOrder) ? data.unitsOnOrder : 0;
    data.unitsInStock = (data.unitsInStock) ? data.unitsInStock : 0;
    data.publishedAt = (data.publishedAt) ? data.publishedAt : null;

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
