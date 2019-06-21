import { TestBed } from '@angular/core/testing';

import { LickAppWidgetMaintenanceService } from './lick-app-widget-maintenance.service';

describe('LickAppWidgetMaintenanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetMaintenanceService = TestBed.get(LickAppWidgetMaintenanceService);
    expect(service).toBeTruthy();
  });
});
