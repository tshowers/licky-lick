import { TestBed } from '@angular/core/testing';

import { LickMarketingPrices2Service } from './lick-marketing-prices2.service';

describe('LickMarketingPrices2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingPrices2Service = TestBed.get(LickMarketingPrices2Service);
    expect(service).toBeTruthy();
  });
});
