import { TestBed } from '@angular/core/testing';

import { LickAppWidgetBreadcrumbService } from './lick-app-widget-breadcrumb.service';

describe('LickAppWidgetBreadcrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetBreadcrumbService = TestBed.get(LickAppWidgetBreadcrumbService);
    expect(service).toBeTruthy();
  });
});
