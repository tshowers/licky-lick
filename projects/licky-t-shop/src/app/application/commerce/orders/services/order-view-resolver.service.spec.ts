import { TestBed } from '@angular/core/testing';

import { OrderViewResolverService } from './order-view-resolver.service';

describe('OrderViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderViewResolverService = TestBed.get(OrderViewResolverService);
    expect(service).toBeTruthy();
  });
});
