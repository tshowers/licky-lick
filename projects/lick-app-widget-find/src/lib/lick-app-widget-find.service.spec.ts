import { TestBed } from '@angular/core/testing';

import { LickAppWidgetFindService } from './lick-app-widget-find.service';

describe('LickAppWidgetFindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetFindService = TestBed.get(LickAppWidgetFindService);
    expect(service).toBeTruthy();
  });
});
