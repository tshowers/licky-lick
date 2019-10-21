import { TestBed } from '@angular/core/testing';

import { LickAppWidgetUnderConstructionService } from './lick-app-widget-under-construction.service';

describe('LickAppWidgetUnderConstructionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetUnderConstructionService = TestBed.get(LickAppWidgetUnderConstructionService);
    expect(service).toBeTruthy();
  });
});
