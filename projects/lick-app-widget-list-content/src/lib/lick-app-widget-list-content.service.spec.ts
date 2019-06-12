import { TestBed } from '@angular/core/testing';

import { LickAppWidgetListContentService } from './lick-app-widget-list-content.service';

describe('LickAppWidgetListContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetListContentService = TestBed.get(LickAppWidgetListContentService);
    expect(service).toBeTruthy();
  });
});
