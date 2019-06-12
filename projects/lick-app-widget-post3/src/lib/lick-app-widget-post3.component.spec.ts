import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetPost3Component } from './lick-app-widget-post3.component';

describe('LickAppWidgetPost3Component', () => {
  let component: LickAppWidgetPost3Component;
  let fixture: ComponentFixture<LickAppWidgetPost3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetPost3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetPost3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
