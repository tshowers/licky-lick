import { TestBed } from '@angular/core/testing';

import { LickAppWidgetPost5Service } from './lick-app-widget-post5.service';

describe('LickAppWidgetPost5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetPost5Service = TestBed.get(LickAppWidgetPost5Service);
    expect(service).toBeTruthy();
  });
});
