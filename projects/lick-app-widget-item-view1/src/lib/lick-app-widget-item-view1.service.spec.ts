import { TestBed } from '@angular/core/testing';

import { LickAppWidgetItemView1Service } from './lick-app-widget-item-view1.service';

describe('LickAppWidgetItemView1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetItemView1Service = TestBed.get(LickAppWidgetItemView1Service);
    expect(service).toBeTruthy();
  });
});
