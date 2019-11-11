import { TestBed } from '@angular/core/testing';

import { ShoppingCartResolverService } from './shopping-cart-resolver.service';

describe('ShoppingCartResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingCartResolverService = TestBed.get(ShoppingCartResolverService);
    expect(service).toBeTruthy();
  });
});
