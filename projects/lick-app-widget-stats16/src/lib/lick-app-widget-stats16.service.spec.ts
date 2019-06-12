import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats16Service } from './lick-app-widget-stats16.service';

describe('LickAppWidgetStats16Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats16Service = TestBed.get(LickAppWidgetStats16Service);
    expect(service).toBeTruthy();
  });
});
