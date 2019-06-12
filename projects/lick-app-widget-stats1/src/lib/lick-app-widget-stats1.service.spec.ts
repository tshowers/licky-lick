import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats1Service } from './lick-app-widget-stats1.service';

describe('LickAppWidgetStats1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats1Service = TestBed.get(LickAppWidgetStats1Service);
    expect(service).toBeTruthy();
  });
});
