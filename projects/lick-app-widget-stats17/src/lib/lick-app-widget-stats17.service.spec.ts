import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats17Service } from './lick-app-widget-stats17.service';

describe('LickAppWidgetStats17Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats17Service = TestBed.get(LickAppWidgetStats17Service);
    expect(service).toBeTruthy();
  });
});
