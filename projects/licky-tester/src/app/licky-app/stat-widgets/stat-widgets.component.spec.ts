import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatWidgetsComponent } from './stat-widgets.component';

describe('StatWidgetsComponent', () => {
  let component: StatWidgetsComponent;
  let fixture: ComponentFixture<StatWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
