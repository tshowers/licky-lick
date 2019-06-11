import { TestBed } from '@angular/core/testing';

import { LickMarketingTryIt1Service } from './lick-marketing-try-it1.service';

describe('LickMarketingTryIt1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingTryIt1Service = TestBed.get(LickMarketingTryIt1Service);
    expect(service).toBeTruthy();
  });
});
