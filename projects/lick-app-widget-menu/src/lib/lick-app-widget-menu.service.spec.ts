import { TestBed } from '@angular/core/testing';

import { LickAppWidgetMenuService } from './lick-app-widget-menu.service';

describe('LickAppWidgetMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetMenuService = TestBed.get(LickAppWidgetMenuService);
    expect(service).toBeTruthy();
  });
});
