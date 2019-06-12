import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetListOrderComponent } from './lick-app-widget-list-order.component';

describe('LickAppWidgetListOrderComponent', () => {
  let component: LickAppWidgetListOrderComponent;
  let fixture: ComponentFixture<LickAppWidgetListOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetListOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetListOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
