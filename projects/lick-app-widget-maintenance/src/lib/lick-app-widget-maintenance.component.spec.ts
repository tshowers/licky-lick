import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetMaintenanceComponent } from './lick-app-widget-maintenance.component';

describe('LickAppWidgetMaintenanceComponent', () => {
  let component: LickAppWidgetMaintenanceComponent;
  let fixture: ComponentFixture<LickAppWidgetMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
