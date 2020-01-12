import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetLoader1Component } from './lick-app-widget-loader1.component';

describe('LickAppWidgetLoader1Component', () => {
  let component: LickAppWidgetLoader1Component;
  let fixture: ComponentFixture<LickAppWidgetLoader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetLoader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetLoader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
