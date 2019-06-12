import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetPost4Component } from './lick-app-widget-post4.component';

describe('LickAppWidgetPost4Component', () => {
  let component: LickAppWidgetPost4Component;
  let fixture: ComponentFixture<LickAppWidgetPost4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetPost4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetPost4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
