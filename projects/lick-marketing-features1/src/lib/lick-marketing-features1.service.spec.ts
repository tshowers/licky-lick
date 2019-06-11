import { TestBed } from '@angular/core/testing';

import { LickMarketingFeatures1Service } from './lick-marketing-features1.service';

describe('LickMarketingFeatures1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingFeatures1Service = TestBed.get(LickMarketingFeatures1Service);
    expect(service).toBeTruthy();
  });
});
