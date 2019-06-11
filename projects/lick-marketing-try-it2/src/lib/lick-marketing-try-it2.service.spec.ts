import { TestBed } from '@angular/core/testing';

import { LickMarketingTryIt2Service } from './lick-marketing-try-it2.service';

describe('LickMarketingTryIt2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingTryIt2Service = TestBed.get(LickMarketingTryIt2Service);
    expect(service).toBeTruthy();
  });
});
