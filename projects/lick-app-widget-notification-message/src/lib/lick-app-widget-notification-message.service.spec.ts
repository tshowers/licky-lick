import { TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationMessageService } from './lick-app-widget-notification-message.service';

describe('LickAppWidgetNotificationMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetNotificationMessageService = TestBed.get(LickAppWidgetNotificationMessageService);
    expect(service).toBeTruthy();
  });
});
