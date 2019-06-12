import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats9Service } from './lick-app-widget-stats9.service';

describe('LickAppWidgetStats9Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats9Service = TestBed.get(LickAppWidgetStats9Service);
    expect(service).toBeTruthy();
  });
});
