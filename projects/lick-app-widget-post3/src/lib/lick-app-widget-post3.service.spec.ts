import { TestBed } from '@angular/core/testing';

import { LickAppWidgetPost3Service } from './lick-app-widget-post3.service';

describe('LickAppWidgetPost3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetPost3Service = TestBed.get(LickAppWidgetPost3Service);
    expect(service).toBeTruthy();
  });
});
