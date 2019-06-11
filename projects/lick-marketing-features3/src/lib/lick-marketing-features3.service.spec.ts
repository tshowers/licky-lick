import { TestBed } from '@angular/core/testing';

import { LickMarketingFeatures3Service } from './lick-marketing-features3.service';

describe('LickMarketingFeatures3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingFeatures3Service = TestBed.get(LickMarketingFeatures3Service);
    expect(service).toBeTruthy();
  });
});
