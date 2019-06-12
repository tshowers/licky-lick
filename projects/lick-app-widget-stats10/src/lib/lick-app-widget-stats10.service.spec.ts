import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats10Service } from './lick-app-widget-stats10.service';

describe('LickAppWidgetStats10Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats10Service = TestBed.get(LickAppWidgetStats10Service);
    expect(service).toBeTruthy();
  });
});
