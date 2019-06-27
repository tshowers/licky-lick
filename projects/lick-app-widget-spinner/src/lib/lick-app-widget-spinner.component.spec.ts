import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetSpinnerComponent } from './lick-app-widget-spinner.component';

describe('LickAppWidgetSpinnerComponent', () => {
  let component: LickAppWidgetSpinnerComponent;
  let fixture: ComponentFixture<LickAppWidgetSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
