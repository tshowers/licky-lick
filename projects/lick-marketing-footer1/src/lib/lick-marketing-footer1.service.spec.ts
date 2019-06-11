import { TestBed } from '@angular/core/testing';

import { LickMarketingFooter1Service } from './lick-marketing-footer1.service';

describe('LickMarketingFooter1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingFooter1Service = TestBed.get(LickMarketingFooter1Service);
    expect(service).toBeTruthy();
  });
});
