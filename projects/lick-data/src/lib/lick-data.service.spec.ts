import { TestBed } from '@angular/core/testing';

import { LickDataService } from './lick-data.service';

describe('LickDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickDataService = TestBed.get(LickDataService);
    expect(service).toBeTruthy();
  });
});
