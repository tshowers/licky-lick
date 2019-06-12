import { TestBed } from '@angular/core/testing';

import { LickAppWidgetListBadgesService } from './lick-app-widget-list-badges.service';

describe('LickAppWidgetListBadgesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetListBadgesService = TestBed.get(LickAppWidgetListBadgesService);
    expect(service).toBeTruthy();
  });
});
