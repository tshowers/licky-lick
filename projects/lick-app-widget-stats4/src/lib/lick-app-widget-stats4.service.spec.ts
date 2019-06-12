import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats4Service } from './lick-app-widget-stats4.service';

describe('LickAppWidgetStats4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats4Service = TestBed.get(LickAppWidgetStats4Service);
    expect(service).toBeTruthy();
  });
});
