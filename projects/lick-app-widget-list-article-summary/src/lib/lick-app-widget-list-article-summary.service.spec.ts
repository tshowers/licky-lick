import { TestBed } from '@angular/core/testing';

import { LickAppWidgetListArticleSummaryService } from './lick-app-widget-list-article-summary.service';

describe('LickAppWidgetListArticleSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetListArticleSummaryService = TestBed.get(LickAppWidgetListArticleSummaryService);
    expect(service).toBeTruthy();
  });
});
