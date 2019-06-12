import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats3Service } from './lick-app-widget-stats3.service';

describe('LickAppWidgetStats3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats3Service = TestBed.get(LickAppWidgetStats3Service);
    expect(service).toBeTruthy();
  });
});
