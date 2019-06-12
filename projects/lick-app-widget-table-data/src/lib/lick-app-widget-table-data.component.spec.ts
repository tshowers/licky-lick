import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetTableDataComponent } from './lick-app-widget-table-data.component';

describe('LickAppWidgetTableDataComponent', () => {
  let component: LickAppWidgetTableDataComponent;
  let fixture: ComponentFixture<LickAppWidgetTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
