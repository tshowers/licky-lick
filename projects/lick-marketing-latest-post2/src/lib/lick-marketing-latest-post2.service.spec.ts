import { TestBed } from '@angular/core/testing';

import { LickMarketingLatestPost2Service } from './lick-marketing-latest-post2.service';

describe('LickMarketingLatestPost2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingLatestPost2Service = TestBed.get(LickMarketingLatestPost2Service);
    expect(service).toBeTruthy();
  });
});
