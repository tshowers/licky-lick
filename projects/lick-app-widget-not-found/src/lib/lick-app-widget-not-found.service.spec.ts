import { TestBed } from '@angular/core/testing';

import { LickAppWidgetNotFoundService } from './lick-app-widget-not-found.service';

describe('LickAppWidgetNotFoundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetNotFoundService = TestBed.get(LickAppWidgetNotFoundService);
    expect(service).toBeTruthy();
  });
});
