import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats5Service } from './lick-app-widget-stats5.service';

describe('LickAppWidgetStats5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats5Service = TestBed.get(LickAppWidgetStats5Service);
    expect(service).toBeTruthy();
  });
});
