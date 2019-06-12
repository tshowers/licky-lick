import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats15Component } from './lick-app-widget-stats15.component';

describe('LickAppWidgetStats15Component', () => {
  let component: LickAppWidgetStats15Component;
  let fixture: ComponentFixture<LickAppWidgetStats15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
