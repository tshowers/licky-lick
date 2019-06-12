import { TestBed } from '@angular/core/testing';

import { LickAppWidgetFooterService } from './lick-app-widget-footer.service';

describe('LickAppWidgetFooterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetFooterService = TestBed.get(LickAppWidgetFooterService);
    expect(service).toBeTruthy();
  });
});
