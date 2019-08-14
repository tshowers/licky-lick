import { TestBed } from '@angular/core/testing';

import { LickAppWidgetNoDataService } from './lick-app-widget-no-data.service';

describe('LickAppWidgetNoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetNoDataService = TestBed.get(LickAppWidgetNoDataService);
    expect(service).toBeTruthy();
  });
});
