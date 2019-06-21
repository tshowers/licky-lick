import { TestBed } from '@angular/core/testing';

import { LickAppWidgetSignupService } from './lick-app-widget-signup.service';

describe('LickAppWidgetSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetSignupService = TestBed.get(LickAppWidgetSignupService);
    expect(service).toBeTruthy();
  });
});
