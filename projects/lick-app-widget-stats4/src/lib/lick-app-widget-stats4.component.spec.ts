import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats4Component } from './lick-app-widget-stats4.component';

describe('LickAppWidgetStats4Component', () => {
  let component: LickAppWidgetStats4Component;
  let fixture: ComponentFixture<LickAppWidgetStats4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
