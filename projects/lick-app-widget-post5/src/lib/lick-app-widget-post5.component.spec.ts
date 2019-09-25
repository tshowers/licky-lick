import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetPost5Component } from './lick-app-widget-post5.component';

describe('LickAppWidgetPost5Component', () => {
  let component: LickAppWidgetPost5Component;
  let fixture: ComponentFixture<LickAppWidgetPost5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetPost5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetPost5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
