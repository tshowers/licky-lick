import { TestBed } from '@angular/core/testing';

import { StoreViewResolverService } from './store-view-resolver.service';

describe('StoreViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreViewResolverService = TestBed.get(StoreViewResolverService);
    expect(service).toBeTruthy();
  });
});
