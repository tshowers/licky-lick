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
    data.id = data.hasOwnProperty('id') ? data.id : null;
    data.name = data.hasOwnProperty('name') ? data.name : null;
    data.url = data.hasOwnProperty('url') ? data.url : null;
    data.icon = data.hasOwnProperty('icon') ? data.icon : null;
    data.badge = data.hasOwnProperty('badge') ? data.badge : null;
    data.link = data.hasOwnProperty('link') ? data.link : null;
    data.shared = data.hasOwnProperty('shared') ? data.shared : false;

    data.catalog_id = data.hasOwnProperty('catalog_id') ? data.catalog_id : null;
    data.store_id = data.hasOwnProperty('store_id') ? data.store_id : null;
    data.discontinued = data.hasOwnProperty('discontinued') ? data.discontinued : false;
    data.features = data.hasOwnProperty('features') ? data.features : null;
    data.deliverable_id = data.hasOwnProperty('deliverable_id') ? data.deliverable_id : null;
    data.description = data.hasOwnProperty('description') ? data.description : null;
    data.longDescription = data.hasOwnProperty('longDescription') ? data.longDescription : null;
    data.manufacturer = data.hasOwnProperty('manufacturer') ? data.manufacturer : null;
    data.author = data.hasOwnProperty('author') ? data.author : null;
    data.category = data.hasOwnProperty('category') ? data.category : null;
    data.leadTime = data.hasOwnProperty('leadTime') ? data.leadTime : 0;
    data.onSale = data.hasOwnProperty('onSale') ? data.onSale : false;
    data.salePrice = data.hasOwnProperty('salePrice') ? data.salePrice : 0;
    data.orderQuantity = data.hasOwnProperty('orderQuantity') ? data.orderQuantity : 0;
    data.orderQuantityMeasure = data.hasOwnProperty('orderQuantityMeasure') ? data.orderQuantityMeasure : null;
    data.price = data.hasOwnProperty('price') ? data.price : 0;
    data.hourlyRate = data.hasOwnProperty('hourlyRate') ? data.hourlyRate : 0;
    data.reOrderLevel = data.hasOwnProperty('reOrderLevel') ? data.reOrderLevel : 0;
    data.sku = data.hasOwnProperty('sku') ? data.sku : null;
    data.subscription = data.hasOwnProperty('subscription') ? data.subscription : false;
    data.weight = data.hasOwnProperty('weight') ? data.weight : 0;
    data.height = data.hasOwnProperty('height') ? data.height : 0;
    data.width = data.hasOwnProperty('width') ? data.width : 0;
    data.length = data.hasOwnProperty('length') ? data.length : 0;
    data.unitsOnOrder = data.hasOwnProperty('unitsOnOrder') ? data.unitsOnOrder : 0;
    data.unitsInStock = data.hasOwnProperty('unitsInStock') ? data.unitsInStock : 0;
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
