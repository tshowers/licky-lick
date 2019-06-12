import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats10Component } from './lick-app-widget-stats10.component';

describe('LickAppWidgetStats10Component', () => {
  let component: LickAppWidgetStats10Component;
  let fixture: ComponentFixture<LickAppWidgetStats10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
