import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats3Component } from './lick-app-widget-stats3.component';

describe('LickAppWidgetStats3Component', () => {
  let component: LickAppWidgetStats3Component;
  let fixture: ComponentFixture<LickAppWidgetStats3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
