import { TestBed } from '@angular/core/testing';

import { LickAppWidgetPost2Service } from './lick-app-widget-post2.service';

describe('LickAppWidgetPost2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetPost2Service = TestBed.get(LickAppWidgetPost2Service);
    expect(service).toBeTruthy();
  });
});
