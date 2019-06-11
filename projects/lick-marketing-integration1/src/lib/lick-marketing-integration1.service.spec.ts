import { TestBed } from '@angular/core/testing';

import { LickMarketingIntegration1Service } from './lick-marketing-integration1.service';

describe('LickMarketingIntegration1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingIntegration1Service = TestBed.get(LickMarketingIntegration1Service);
    expect(service).toBeTruthy();
  });
});
