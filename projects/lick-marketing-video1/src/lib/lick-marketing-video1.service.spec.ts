import { TestBed } from '@angular/core/testing';

import { LickMarketingVideo1Service } from './lick-marketing-video1.service';

describe('LickMarketingVideo1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingVideo1Service = TestBed.get(LickMarketingVideo1Service);
    expect(service).toBeTruthy();
  });
});
