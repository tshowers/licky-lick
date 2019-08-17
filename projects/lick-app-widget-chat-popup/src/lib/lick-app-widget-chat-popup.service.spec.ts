import { TestBed } from '@angular/core/testing';

import { LickAppWidgetChatPopupService } from './lick-app-widget-chat-popup.service';

describe('LickAppWidgetChatPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetChatPopupService = TestBed.get(LickAppWidgetChatPopupService);
    expect(service).toBeTruthy();
  });
});
