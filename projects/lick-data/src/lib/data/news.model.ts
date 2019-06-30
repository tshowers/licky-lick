import { Section } from './section.model';

export class News {
  public status?;
  public totalResults?;
  public articles: NewsArticle[];
}

export class NewsArticle {
  public id?: string;
  public title?;

  public name: string;
  public url?: string;
  public icon?;
  public badge?;
  public urlToImage?;
  public content?;
  public link?: string;
  public shared: boolean = true;

  public source?: NewsSource;
  public author?;
  public description?;
  public isExternal : boolean = false;

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
}

export class NewsSource {
  public id?;
  public name?;
}
