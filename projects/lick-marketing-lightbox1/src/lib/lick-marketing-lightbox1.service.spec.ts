import { TestBed } from '@angular/core/testing';

import { LickMarketingLightbox1Service } from './lick-marketing-lightbox1.service';

describe('LickMarketingLightbox1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingLightbox1Service = TestBed.get(LickMarketingLightbox1Service);
    expect(service).toBeTruthy();
  });
});
