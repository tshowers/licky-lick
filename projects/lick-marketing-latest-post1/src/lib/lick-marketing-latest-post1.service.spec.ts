import { TestBed } from '@angular/core/testing';

import { LickMarketingLatestPost1Service } from './lick-marketing-latest-post1.service';

describe('LickMarketingLatestPost1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingLatestPost1Service = TestBed.get(LickMarketingLatestPost1Service);
    expect(service).toBeTruthy();
  });
});
