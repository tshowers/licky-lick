import { TestBed } from '@angular/core/testing';

import { LickAppWidgetListIconsService } from './lick-app-widget-list-icons.service';

describe('LickAppWidgetListIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetListIconsService = TestBed.get(LickAppWidgetListIconsService);
    expect(service).toBeTruthy();
  });
});
