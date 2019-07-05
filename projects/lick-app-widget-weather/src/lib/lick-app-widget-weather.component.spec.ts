import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetWeatherComponent } from './lick-app-widget-weather.component';

describe('LickAppWidgetWeatherComponent', () => {
  let component: LickAppWidgetWeatherComponent;
  let fixture: ComponentFixture<LickAppWidgetWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
