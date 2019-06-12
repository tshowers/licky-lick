import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetStats5Component } from './lick-app-widget-stats5.component';

describe('LickAppWidgetStats5Component', () => {
  let component: LickAppWidgetStats5Component;
  let fixture: ComponentFixture<LickAppWidgetStats5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetStats5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetStats5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
