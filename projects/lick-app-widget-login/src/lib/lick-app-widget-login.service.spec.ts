import { TestBed } from '@angular/core/testing';

import { LickAppWidgetLoginService } from './lick-app-widget-login.service';

describe('LickAppWidgetLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetLoginService = TestBed.get(LickAppWidgetLoginService);
    expect(service).toBeTruthy();
  });
});
