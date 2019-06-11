import { TestBed } from '@angular/core/testing';

import { LickMarketingReviews2Service } from './lick-marketing-reviews2.service';

describe('LickMarketingReviews2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingReviews2Service = TestBed.get(LickMarketingReviews2Service);
    expect(service).toBeTruthy();
  });
});
