import { TestBed } from '@angular/core/testing';

import { LickMarketingHeader1Service } from './lick-marketing-header1.service';

describe('LickMarketingHeader1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingHeader1Service = TestBed.get(LickMarketingHeader1Service);
    expect(service).toBeTruthy();
  });
});
