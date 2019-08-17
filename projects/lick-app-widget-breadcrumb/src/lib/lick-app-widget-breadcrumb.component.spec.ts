import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetBreadcrumbComponent } from './lick-app-widget-breadcrumb.component';

describe('LickAppWidgetBreadcrumbComponent', () => {
  let component: LickAppWidgetBreadcrumbComponent;
  let fixture: ComponentFixture<LickAppWidgetBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
