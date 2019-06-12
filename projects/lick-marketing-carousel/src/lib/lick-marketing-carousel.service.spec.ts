import { TestBed } from '@angular/core/testing';

import { LickMarketingCarouselService } from './lick-marketing-carousel.service';

describe('LickMarketingCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingCarouselService = TestBed.get(LickMarketingCarouselService);
    expect(service).toBeTruthy();
  });
});
