import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats1Component } from './lick-app-widget-stats1.component';

describe('LickAppWidgetStats1Component', () => {
  let component: LickAppWidgetStats1Component;
  let fixture: ComponentFixture<LickAppWidgetStats1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
