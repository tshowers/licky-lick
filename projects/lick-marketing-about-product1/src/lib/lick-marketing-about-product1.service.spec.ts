import { TestBed } from '@angular/core/testing';

import { LickMarketingAboutProduct1Service } from './lick-marketing-about-product1.service';

describe('LickMarketingAboutProduct1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingAboutProduct1Service = TestBed.get(LickMarketingAboutProduct1Service);
    expect(service).toBeTruthy();
  });
});
