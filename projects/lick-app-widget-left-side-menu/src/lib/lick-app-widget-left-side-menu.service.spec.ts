import { TestBed } from '@angular/core/testing';

import { LickAppWidgetLeftSideMenuService } from './lick-app-widget-left-side-menu.service';

describe('LickAppWidgetLeftSideMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetLeftSideMenuService = TestBed.get(LickAppWidgetLeftSideMenuService);
    expect(service).toBeTruthy();
  });
});
