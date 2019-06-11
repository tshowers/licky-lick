import { TestBed } from '@angular/core/testing';

import { LickMarketingFeatures5Service } from './lick-marketing-features5.service';

describe('LickMarketingFeatures5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingFeatures5Service = TestBed.get(LickMarketingFeatures5Service);
    expect(service).toBeTruthy();
  });
});
