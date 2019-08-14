import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetNoDataComponent } from './lick-app-widget-no-data.component';

describe('LickAppWidgetNoDataComponent', () => {
  let component: LickAppWidgetNoDataComponent;
  let fixture: ComponentFixture<LickAppWidgetNoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetNoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
