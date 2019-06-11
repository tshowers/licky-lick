import { TestBed } from '@angular/core/testing';

import { LickMarketingPrices1Service } from './lick-marketing-prices1.service';

describe('LickMarketingPrices1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingPrices1Service = TestBed.get(LickMarketingPrices1Service);
    expect(service).toBeTruthy();
  });
});
