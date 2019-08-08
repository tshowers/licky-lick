import { TestBed } from '@angular/core/testing';

import { LickMarketingSecurityService } from './lick-marketing-security.service';

describe('LickMarketingSecurityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingSecurityService = TestBed.get(LickMarketingSecurityService);
    expect(service).toBeTruthy();
  });
});
