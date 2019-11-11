import { TestBed } from '@angular/core/testing';

import { ShoppingCartViewResolverService } from './shopping-cart-view-resolver.service';

describe('ShoppingCartViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingCartViewResolverService = TestBed.get(ShoppingCartViewResolverService);
    expect(service).toBeTruthy();
  });
});
