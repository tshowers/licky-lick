import { TestBed } from '@angular/core/testing';

import { LickMarketingFeatures2Service } from './lick-marketing-features2.service';

describe('LickMarketingFeatures2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingFeatures2Service = TestBed.get(LickMarketingFeatures2Service);
    expect(service).toBeTruthy();
  });
});
