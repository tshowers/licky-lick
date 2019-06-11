import { TestBed } from '@angular/core/testing';

import { LickMarketingTeam1Service } from './lick-marketing-team1.service';

describe('LickMarketingTeam1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingTeam1Service = TestBed.get(LickMarketingTeam1Service);
    expect(service).toBeTruthy();
  });
});
