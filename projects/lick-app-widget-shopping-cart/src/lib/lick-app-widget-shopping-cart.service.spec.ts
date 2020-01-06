import { TestBed } from '@angular/core/testing';

import { LickAppWidgetShoppingCartService } from './lick-app-widget-shopping-cart.service';

describe('LickAppWidgetShoppingCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetShoppingCartService = TestBed.get(LickAppWidgetShoppingCartService);
    expect(service).toBeTruthy();
  });
});
