import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationCartComponent } from './lick-app-widget-notification-cart.component';

describe('LickAppWidgetNotificationCartComponent', () => {
  let component: LickAppWidgetNotificationCartComponent;
  let fixture: ComponentFixture<LickAppWidgetNotificationCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetNotificationCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetNotificationCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
