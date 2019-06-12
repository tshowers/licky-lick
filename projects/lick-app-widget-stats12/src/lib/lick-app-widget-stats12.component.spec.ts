import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats12Component } from './lick-app-widget-stats12.component';

describe('LickAppWidgetStats12Component', () => {
  let component: LickAppWidgetStats12Component;
  let fixture: ComponentFixture<LickAppWidgetStats12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
