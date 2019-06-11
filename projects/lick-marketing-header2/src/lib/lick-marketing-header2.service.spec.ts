import { TestBed } from '@angular/core/testing';

import { LickMarketingHeader2Service } from './lick-marketing-header2.service';

describe('LickMarketingHeader2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingHeader2Service = TestBed.get(LickMarketingHeader2Service);
    expect(service).toBeTruthy();
  });
});
