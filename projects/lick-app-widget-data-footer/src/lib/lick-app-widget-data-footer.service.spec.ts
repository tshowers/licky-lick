import { TestBed } from '@angular/core/testing';

import { LickAppWidgetDataFooterService } from './lick-app-widget-data-footer.service';

describe('LickAppWidgetDataFooterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetDataFooterService = TestBed.get(LickAppWidgetDataFooterService);
    expect(service).toBeTruthy();
  });
});
