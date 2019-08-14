import { TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationTaskService } from './lick-app-widget-notification-task.service';

describe('LickAppWidgetNotificationTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetNotificationTaskService = TestBed.get(LickAppWidgetNotificationTaskService);
    expect(service).toBeTruthy();
  });
});
