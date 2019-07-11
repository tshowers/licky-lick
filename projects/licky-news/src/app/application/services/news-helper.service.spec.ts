import { TestBed } from '@angular/core/testing';

import { NewsHelperService } from './news-helper.service';

describe('NewsHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsHelperService = TestBed.get(NewsHelperService);
    expect(service).toBeTruthy();
  });
});
