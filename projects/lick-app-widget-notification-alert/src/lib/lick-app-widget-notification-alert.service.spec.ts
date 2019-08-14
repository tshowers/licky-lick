import { TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationAlertService } from './lick-app-widget-notification-alert.service';

describe('LickAppWidgetNotificationAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetNotificationAlertService = TestBed.get(LickAppWidgetNotificationAlertService);
    expect(service).toBeTruthy();
  });
});
