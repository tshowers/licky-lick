import { TestBed } from '@angular/core/testing';

import { LickAppWidgetCardColumnService } from './lick-app-widget-card-column.service';

describe('LickAppWidgetCardColumnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetCardColumnService = TestBed.get(LickAppWidgetCardColumnService);
    expect(service).toBeTruthy();
  });
});
