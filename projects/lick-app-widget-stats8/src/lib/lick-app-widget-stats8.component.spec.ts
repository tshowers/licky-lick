import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats8Component } from './lick-app-widget-stats8.component';

describe('LickAppWidgetStats8Component', () => {
  let component: LickAppWidgetStats8Component;
  let fixture: ComponentFixture<LickAppWidgetStats8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
