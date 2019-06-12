import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats17Component } from './lick-app-widget-stats17.component';

describe('LickAppWidgetStats17Component', () => {
  let component: LickAppWidgetStats17Component;
  let fixture: ComponentFixture<LickAppWidgetStats17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
