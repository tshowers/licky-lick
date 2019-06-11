import { TestBed } from '@angular/core/testing';

import { LickMarketingReviews1Service } from './lick-marketing-reviews1.service';

describe('LickMarketingReviews1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingReviews1Service = TestBed.get(LickMarketingReviews1Service);
    expect(service).toBeTruthy();
  });
});
