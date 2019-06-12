import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetPost2Component } from './lick-app-widget-post2.component';

describe('LickAppWidgetPost2Component', () => {
  let component: LickAppWidgetPost2Component;
  let fixture: ComponentFixture<LickAppWidgetPost2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetPost2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetPost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
