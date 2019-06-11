import { TestBed } from '@angular/core/testing';

import { LickMarketingTeam3Service } from './lick-marketing-team3.service';

describe('LickMarketingTeam3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingTeam3Service = TestBed.get(LickMarketingTeam3Service);
    expect(service).toBeTruthy();
  });
});
