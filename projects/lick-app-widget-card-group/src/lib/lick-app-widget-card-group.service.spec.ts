import { TestBed } from '@angular/core/testing';

import { LickAppWidgetCardGroupService } from './lick-app-widget-card-group.service';

describe('LickAppWidgetCardGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetCardGroupService = TestBed.get(LickAppWidgetCardGroupService);
    expect(service).toBeTruthy();
  });
});
