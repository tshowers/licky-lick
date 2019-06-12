import { TestBed } from '@angular/core/testing';

import { LickAppWidgetChatService } from './lick-app-widget-chat.service';

describe('LickAppWidgetChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetChatService = TestBed.get(LickAppWidgetChatService);
    expect(service).toBeTruthy();
  });
});
