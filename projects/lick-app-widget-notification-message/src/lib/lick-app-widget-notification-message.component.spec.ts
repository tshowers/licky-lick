import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationMessageComponent } from './lick-app-widget-notification-message.component';

describe('LickAppWidgetNotificationMessageComponent', () => {
  let component: LickAppWidgetNotificationMessageComponent;
  let fixture: ComponentFixture<LickAppWidgetNotificationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetNotificationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetNotificationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
