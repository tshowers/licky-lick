import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats11Component } from './lick-app-widget-stats11.component';

describe('LickAppWidgetStats11Component', () => {
  let component: LickAppWidgetStats11Component;
  let fixture: ComponentFixture<LickAppWidgetStats11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
