import { TestBed } from '@angular/core/testing';

import { LickAppWidgetArticleService } from './lick-app-widget-article.service';

describe('LickAppWidgetArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetArticleService = TestBed.get(LickAppWidgetArticleService);
    expect(service).toBeTruthy();
  });
});
