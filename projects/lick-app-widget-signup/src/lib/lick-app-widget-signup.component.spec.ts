import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetSignupComponent } from './lick-app-widget-signup.component';

describe('LickAppWidgetSignupComponent', () => {
  let component: LickAppWidgetSignupComponent;
  let fixture: ComponentFixture<LickAppWidgetSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
