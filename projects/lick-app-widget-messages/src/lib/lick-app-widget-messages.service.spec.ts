import { TestBed } from '@angular/core/testing';

import { LickAppWidgetMessagesService } from './lick-app-widget-messages.service';

describe('LickAppWidgetMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetMessagesService = TestBed.get(LickAppWidgetMessagesService);
    expect(service).toBeTruthy();
  });
});
