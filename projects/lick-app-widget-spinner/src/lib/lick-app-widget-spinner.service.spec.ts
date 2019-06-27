import { TestBed } from '@angular/core/testing';

import { LickAppWidgetSpinnerService } from './lick-app-widget-spinner.service';

describe('LickAppWidgetSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetSpinnerService = TestBed.get(LickAppWidgetSpinnerService);
    expect(service).toBeTruthy();
  });
});
