import { TestBed } from '@angular/core/testing';

import { LickAppWidgetPost1Service } from './lick-app-widget-post1.service';

describe('LickAppWidgetPost1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetPost1Service = TestBed.get(LickAppWidgetPost1Service);
    expect(service).toBeTruthy();
  });
});
