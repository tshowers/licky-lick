import { TestBed } from '@angular/core/testing';

import { LickAppWidgetLogoutService } from './lick-app-widget-logout.service';

describe('LickAppWidgetLogoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetLogoutService = TestBed.get(LickAppWidgetLogoutService);
    expect(service).toBeTruthy();
  });
});
