import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats9Component } from './lick-app-widget-stats9.component';

describe('LickAppWidgetStats9Component', () => {
  let component: LickAppWidgetStats9Component;
  let fixture: ComponentFixture<LickAppWidgetStats9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
