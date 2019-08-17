import { TestBed } from '@angular/core/testing';

import { LickAppPanelService } from './lick-app-panel.service';

describe('LickAppPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppPanelService = TestBed.get(LickAppPanelService);
    expect(service).toBeTruthy();
  });
});
