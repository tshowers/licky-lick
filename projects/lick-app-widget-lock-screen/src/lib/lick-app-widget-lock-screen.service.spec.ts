import { TestBed } from '@angular/core/testing';

import { LickAppWidgetLockScreenService } from './lick-app-widget-lock-screen.service';

describe('LickAppWidgetLockScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetLockScreenService = TestBed.get(LickAppWidgetLockScreenService);
    expect(service).toBeTruthy();
  });
});
