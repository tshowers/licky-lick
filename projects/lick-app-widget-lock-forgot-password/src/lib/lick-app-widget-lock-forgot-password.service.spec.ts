import { TestBed } from '@angular/core/testing';

import { LickAppWidgetLockForgotPasswordService } from './lick-app-widget-lock-forgot-password.service';

describe('LickAppWidgetLockForgotPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetLockForgotPasswordService = TestBed.get(LickAppWidgetLockForgotPasswordService);
    expect(service).toBeTruthy();
  });
});
