import { TestBed } from '@angular/core/testing';

import { LickMarketingIntegration2Service } from './lick-marketing-integration2.service';

describe('LickMarketingIntegration2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingIntegration2Service = TestBed.get(LickMarketingIntegration2Service);
    expect(service).toBeTruthy();
  });
});
