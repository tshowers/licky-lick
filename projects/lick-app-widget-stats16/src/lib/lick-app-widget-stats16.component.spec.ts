import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats16Component } from './lick-app-widget-stats16.component';

describe('LickAppWidgetStats16Component', () => {
  let component: LickAppWidgetStats16Component;
  let fixture: ComponentFixture<LickAppWidgetStats16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
