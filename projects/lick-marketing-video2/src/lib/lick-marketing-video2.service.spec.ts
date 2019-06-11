import { TestBed } from '@angular/core/testing';

import { LickMarketingVideo2Service } from './lick-marketing-video2.service';

describe('LickMarketingVideo2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingVideo2Service = TestBed.get(LickMarketingVideo2Service);
    expect(service).toBeTruthy();
  });
});
