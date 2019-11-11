import { TestBed } from '@angular/core/testing';

import { ProductBundleViewResolverService } from './product-bundle-view-resolver.service';

describe('ProductBundleViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductBundleViewResolverService = TestBed.get(ProductBundleViewResolverService);
    expect(service).toBeTruthy();
  });
});
