import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats11Service } from './lick-app-widget-stats11.service';

describe('LickAppWidgetStats11Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats11Service = TestBed.get(LickAppWidgetStats11Service);
    expect(service).toBeTruthy();
  });
});
