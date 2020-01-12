import { TestBed } from '@angular/core/testing';

import { LickAppWidgetLoader1Service } from './lick-app-widget-loader1.service';

describe('LickAppWidgetLoader1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetLoader1Service = TestBed.get(LickAppWidgetLoader1Service);
    expect(service).toBeTruthy();
  });
});
