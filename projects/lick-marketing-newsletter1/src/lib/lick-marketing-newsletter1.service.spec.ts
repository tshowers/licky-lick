import { TestBed } from '@angular/core/testing';

import { LickMarketingNewsletter1Service } from './lick-marketing-newsletter1.service';

describe('LickMarketingNewsletter1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingNewsletter1Service = TestBed.get(LickMarketingNewsletter1Service);
    expect(service).toBeTruthy();
  });
});
