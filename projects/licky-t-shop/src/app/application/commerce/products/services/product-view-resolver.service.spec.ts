import { TestBed } from '@angular/core/testing';

import { ProductViewResolverService } from './product-view-resolver.service';

describe('ProductViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductViewResolverService = TestBed.get(ProductViewResolverService);
    expect(service).toBeTruthy();
  });
});
