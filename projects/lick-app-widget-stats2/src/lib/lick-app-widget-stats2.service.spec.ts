import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats2Service } from './lick-app-widget-stats2.service';

describe('LickAppWidgetStats2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats2Service = TestBed.get(LickAppWidgetStats2Service);
    expect(service).toBeTruthy();
  });
});
