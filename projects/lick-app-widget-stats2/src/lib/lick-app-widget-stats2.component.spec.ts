import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats2Component } from './lick-app-widget-stats2.component';

describe('LickAppWidgetStats2Component', () => {
  let component: LickAppWidgetStats2Component;
  let fixture: ComponentFixture<LickAppWidgetStats2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
