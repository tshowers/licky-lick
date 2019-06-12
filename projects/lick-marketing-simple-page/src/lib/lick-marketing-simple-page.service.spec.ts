import { TestBed } from '@angular/core/testing';

import { LickMarketingSimplePageService } from './lick-marketing-simple-page.service';

describe('LickMarketingSimplePageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingSimplePageService = TestBed.get(LickMarketingSimplePageService);
    expect(service).toBeTruthy();
  });
});
