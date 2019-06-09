import { Section } from './section.model';

export class Blog {
  public $key: string;
  public id?;
  public title?: string;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public step?;
  public headingFont?: string;
  public headingFontSize?: number;
  public bodyTextFont?: string;
  public bodyTextFontSize?: number;
  public description?: string;

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
  public userImage;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;
}

export class Carousel  {
  public id?;
  public title?: string;
  public step?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public sections?: Array<Section> = [];
  public textFont?: string;
  public fontSize?: number;
  public textColor?: string;
  public textBackgroundColor?: string;
  public headingTextColor?: string;
  public animateIn?: string;
  public animateOut?: string;
  public dots?: boolean = true;
  public loop?: boolean = true;
  public autoplay?: boolean = true;
  public autoplaySpeed?: number;
  public autoplayHoverPause?: boolean = true;
  public displayItems?: number = 1;
  public textPosition?: string;

  public description?: string;
  public linkText?: string;

  public blog_id?;
  public store_id?;

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
  public userImage;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;
}

export class Featurette  {
  public id?;
  public title?: string;
  public step?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public textFont?: string;
  public textColor?: string;
  public textBackgroundColor?: string;
  public textPosition?: string;
  public description?: string;

  public blog_id;
  public store_id;

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
  public userImage;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;
}

export class Parallax {
  public id?;
  public title?: string;
  public step?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public textFont?: string;
  public textColor?: string;
  public textBackgroundColor?: string;
  public textPosition?: string;
  public description?: string;

  public blog_id?;
  public store_id?;

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
  public userImage;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;
}

export class ServiceBox {
  public id?;
  public title?: string;
  public step?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public textFont?: string;
  public textColor?: string;
  public textBackgroundColor?: string;
  public textPosition?: string;
  public fadeShade?: boolean = false;
  public description?: string;

  public blog_id?;
  public store_id?;

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
  public userImage;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}
export class Quote  {
  public id?;
  public step?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public link?: string;
  public shared: boolean = false;

  public textFont?: string;
  public textColor?: string;
  public textBackgroundColor?: string;
  public textPosition?: string;
  public description?: string;
  public author?: string;

  public blog_id;
  public store_id;

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
  public userImage;

  public bookmarked?;
  public bookmarkedCount?;
  public favored?;
  public favoredCount?;
  public broadcasted?;
  public broadcastedCount?;

}
