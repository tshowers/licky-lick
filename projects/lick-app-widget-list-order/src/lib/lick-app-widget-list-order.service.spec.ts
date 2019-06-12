import { TestBed } from '@angular/core/testing';

import { LickAppWidgetListOrderService } from './lick-app-widget-list-order.service';

describe('LickAppWidgetListOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetListOrderService = TestBed.get(LickAppWidgetListOrderService);
    expect(service).toBeTruthy();
  });
});
