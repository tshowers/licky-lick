import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetNotificationTaskComponent } from './lick-app-widget-notification-task.component';

describe('LickAppWidgetNotificationTaskComponent', () => {
  let component: LickAppWidgetNotificationTaskComponent;
  let fixture: ComponentFixture<LickAppWidgetNotificationTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetNotificationTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetNotificationTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
