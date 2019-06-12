import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats7Component } from './lick-app-widget-stats7.component';

describe('LickAppWidgetStats7Component', () => {
  let component: LickAppWidgetStats7Component;
  let fixture: ComponentFixture<LickAppWidgetStats7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
