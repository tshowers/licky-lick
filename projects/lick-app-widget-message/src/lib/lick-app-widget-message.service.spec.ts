import { TestBed } from '@angular/core/testing';

import { LickAppWidgetMessageService } from './lick-app-widget-message.service';

describe('LickAppWidgetMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetMessageService = TestBed.get(LickAppWidgetMessageService);
    expect(service).toBeTruthy();
  });
});
