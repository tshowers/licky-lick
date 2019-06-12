import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats8Service } from './lick-app-widget-stats8.service';

describe('LickAppWidgetStats8Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats8Service = TestBed.get(LickAppWidgetStats8Service);
    expect(service).toBeTruthy();
  });
});
