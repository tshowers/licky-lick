import { TestBed } from '@angular/core/testing';

import { LickMarketingTryIt3Service } from './lick-marketing-try-it3.service';

describe('LickMarketingTryIt3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingTryIt3Service = TestBed.get(LickMarketingTryIt3Service);
    expect(service).toBeTruthy();
  });
});
