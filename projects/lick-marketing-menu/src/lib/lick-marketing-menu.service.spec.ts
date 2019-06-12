import { TestBed } from '@angular/core/testing';

import { LickMarketingMenuService } from './lick-marketing-menu.service';

describe('LickMarketingMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingMenuService = TestBed.get(LickMarketingMenuService);
    expect(service).toBeTruthy();
  });
});
