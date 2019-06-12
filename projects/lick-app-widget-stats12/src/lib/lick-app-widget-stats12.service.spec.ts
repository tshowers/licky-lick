import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats12Service } from './lick-app-widget-stats12.service';

describe('LickAppWidgetStats12Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats12Service = TestBed.get(LickAppWidgetStats12Service);
    expect(service).toBeTruthy();
  });
});
