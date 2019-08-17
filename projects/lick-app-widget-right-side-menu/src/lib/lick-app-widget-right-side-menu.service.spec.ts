import { TestBed } from '@angular/core/testing';

import { LickAppWidgetRightSideMenuService } from './lick-app-widget-right-side-menu.service';

describe('LickAppWidgetRightSideMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetRightSideMenuService = TestBed.get(LickAppWidgetRightSideMenuService);
    expect(service).toBeTruthy();
  });
});
