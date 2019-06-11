import { TestBed } from '@angular/core/testing';

import { LickMarketingParallax1Service } from './lick-marketing-parallax1.service';

describe('LickMarketingParallax1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingParallax1Service = TestBed.get(LickMarketingParallax1Service);
    expect(service).toBeTruthy();
  });
});
