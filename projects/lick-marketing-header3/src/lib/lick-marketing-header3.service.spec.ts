import { TestBed } from '@angular/core/testing';

import { LickMarketingHeader3Service } from './lick-marketing-header3.service';

describe('LickMarketingHeader3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingHeader3Service = TestBed.get(LickMarketingHeader3Service);
    expect(service).toBeTruthy();
  });
});
