import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationAlertComponent } from './lick-app-widget-notification-alert.component';

describe('LickAppWidgetNotificationAlertComponent', () => {
  let component: LickAppWidgetNotificationAlertComponent;
  let fixture: ComponentFixture<LickAppWidgetNotificationAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetNotificationAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetNotificationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
