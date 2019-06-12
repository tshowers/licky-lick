import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetPost1Component } from './lick-app-widget-post1.component';

describe('LickAppWidgetPost1Component', () => {
  let component: LickAppWidgetPost1Component;
  let fixture: ComponentFixture<LickAppWidgetPost1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetPost1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetPost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
