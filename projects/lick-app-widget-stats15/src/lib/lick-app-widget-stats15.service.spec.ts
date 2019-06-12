import { TestBed } from '@angular/core/testing';

import { LickAppWidgetStats15Service } from './lick-app-widget-stats15.service';

describe('LickAppWidgetStats15Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetStats15Service = TestBed.get(LickAppWidgetStats15Service);
    expect(service).toBeTruthy();
  });
});
