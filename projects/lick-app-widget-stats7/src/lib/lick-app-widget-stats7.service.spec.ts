import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats7Service } from './lick-app-widget-stats7.service';

describe('LickAppWidgetStats7Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats7Service = TestBed.get(LickAppWidgetStats7Service);
    expect(service).toBeTruthy();
  });
});
