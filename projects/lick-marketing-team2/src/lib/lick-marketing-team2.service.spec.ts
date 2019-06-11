import { TestBed } from '@angular/core/testing';

import { LickMarketingTeam2Service } from './lick-marketing-team2.service';

describe('LickMarketingTeam2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickMarketingTeam2Service = TestBed.get(LickMarketingTeam2Service);
    expect(service).toBeTruthy();
  });
});
