import { TestBed } from '@angular/core/testing';

import { LickAppWidgetProfileService } from './lick-app-widget-profile.service';

describe('LickAppWidgetProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetProfileService = TestBed.get(LickAppWidgetProfileService);
    expect(service).toBeTruthy();
  });
});
