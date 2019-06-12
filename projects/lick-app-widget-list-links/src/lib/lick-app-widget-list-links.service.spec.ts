import { TestBed } from '@angular/core/testing';

import { LickAppWidgetListLinksService } from './lick-app-widget-list-links.service';

describe('LickAppWidgetListLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetListLinksService = TestBed.get(LickAppWidgetListLinksService);
    expect(service).toBeTruthy();
  });
});
