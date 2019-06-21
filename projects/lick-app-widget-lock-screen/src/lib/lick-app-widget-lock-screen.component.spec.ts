import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetLockScreenComponent } from './lick-app-widget-lock-screen.component';

describe('LickAppWidgetLockScreenComponent', () => {
  let component: LickAppWidgetLockScreenComponent;
  let fixture: ComponentFixture<LickAppWidgetLockScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetLockScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetLockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
