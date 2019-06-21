import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetLockForgotPasswordComponent } from './lick-app-widget-lock-forgot-password.component';

describe('LickAppWidgetLockForgotPasswordComponent', () => {
  let component: LickAppWidgetLockForgotPasswordComponent;
  let fixture: ComponentFixture<LickAppWidgetLockForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetLockForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetLockForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
