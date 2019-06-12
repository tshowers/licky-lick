import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats14Component } from './lick-app-widget-stats14.component';

describe('LickAppWidgetStats14Component', () => {
  let component: LickAppWidgetStats14Component;
  let fixture: ComponentFixture<LickAppWidgetStats14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
