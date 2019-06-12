import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats13Component } from './lick-app-widget-stats13.component';

describe('LickAppWidgetStats13Component', () => {
  let component: LickAppWidgetStats13Component;
  let fixture: ComponentFixture<LickAppWidgetStats13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
