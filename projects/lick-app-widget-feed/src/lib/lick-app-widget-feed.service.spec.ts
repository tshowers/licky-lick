import { TestBed } from '@angular/core/testing';

import { LickAppWidgetFeedService } from './lick-app-widget-feed.service';

describe('LickAppWidgetFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetFeedService = TestBed.get(LickAppWidgetFeedService);
    expect(service).toBeTruthy();
  });
});
