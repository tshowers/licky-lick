import { TestBed } from '@angular/core/testing';

import { LickMarketingHeader5Service } from './lick-marketing-header5.service';

describe('LickMarketingHeader5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingHeader5Service = TestBed.get(LickMarketingHeader5Service);
    expect(service).toBeTruthy();
  });
});
