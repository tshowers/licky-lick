import { TestBed } from '@angular/core/testing';

import { LickAppPageService } from './lick-app-page.service';

describe('LickAppPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppPageService = TestBed.get(LickAppPageService);
    expect(service).toBeTruthy();
  });
});
