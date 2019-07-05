import { TestBed } from '@angular/core/testing';

import { LickAppWidgetWeatherService } from './lick-app-widget-weather.service';

describe('LickAppWidgetWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetWeatherService = TestBed.get(LickAppWidgetWeatherService);
    expect(service).toBeTruthy();
  });
});
