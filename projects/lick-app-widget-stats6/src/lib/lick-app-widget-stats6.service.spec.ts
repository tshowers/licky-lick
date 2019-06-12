import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats6Service } from './lick-app-widget-stats6.service';

describe('LickAppWidgetStats6Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats6Service = TestBed.get(LickAppWidgetStats6Service);
    expect(service).toBeTruthy();
  });
});
