import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats14Service } from './lick-app-widget-stats14.service';

describe('LickAppWidgetStats14Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats14Service = TestBed.get(LickAppWidgetStats14Service);
    expect(service).toBeTruthy();
  });
});
