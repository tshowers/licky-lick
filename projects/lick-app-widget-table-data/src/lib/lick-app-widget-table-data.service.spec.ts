import { TestBed } from '@angular/core/testing';

import { LickAppWidgetTableDataService } from './lick-app-widget-table-data.service';

describe('LickAppWidgetTableDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetTableDataService = TestBed.get(LickAppWidgetTableDataService);
    expect(service).toBeTruthy();
  });
});
