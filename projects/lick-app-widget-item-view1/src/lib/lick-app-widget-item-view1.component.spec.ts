import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetItemView1Component } from './lick-app-widget-item-view1.component';

describe('LickAppWidgetItemView1Component', () => {
  let component: LickAppWidgetItemView1Component;
  let fixture: ComponentFixture<LickAppWidgetItemView1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetItemView1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetItemView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
