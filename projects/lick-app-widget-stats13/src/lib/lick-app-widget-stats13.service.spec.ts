import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats13Service } from './lick-app-widget-stats13.service';

describe('LickAppWidgetStats13Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats13Service = TestBed.get(LickAppWidgetStats13Service);
    expect(service).toBeTruthy();
  });
});
