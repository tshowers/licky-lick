import { TestBed } from '@angular/core/testing';

import { ProductBundleResolverService } from './product-bundle-resolver.service';

describe('ProductBundleResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductBundleResolverService = TestBed.get(ProductBundleResolverService);
    expect(service).toBeTruthy();
  });
});
