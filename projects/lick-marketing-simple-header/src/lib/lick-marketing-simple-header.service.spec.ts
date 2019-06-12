import { TestBed } from '@angular/core/testing';

import { LickMarketingSimpleHeaderService } from './lick-marketing-simple-header.service';

describe('LickMarketingSimpleHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingSimpleHeaderService = TestBed.get(LickMarketingSimpleHeaderService);
    expect(service).toBeTruthy();
  });
});
