import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats6Component } from './lick-app-widget-stats6.component';

describe('LickAppWidgetStats6Component', () => {
  let component: LickAppWidgetStats6Component;
  let fixture: ComponentFixture<LickAppWidgetStats6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
