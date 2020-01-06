import { TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationCartService } from './lick-app-widget-notification-cart.service';

describe('LickAppWidgetNotificationCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetNotificationCartService = TestBed.get(LickAppWidgetNotificationCartService);
    expect(service).toBeTruthy();
  });
});
