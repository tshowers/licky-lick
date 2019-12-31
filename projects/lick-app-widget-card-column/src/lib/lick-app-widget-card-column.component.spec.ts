import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetCardColumnComponent } from './lick-app-widget-card-column.component';

describe('LickAppWidgetCardColumnComponent', () => {
  let component: LickAppWidgetCardColumnComponent;
  let fixture: ComponentFixture<LickAppWidgetCardColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetCardColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetCardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
