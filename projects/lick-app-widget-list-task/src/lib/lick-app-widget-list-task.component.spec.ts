import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetListTaskComponent } from './lick-app-widget-list-task.component';

describe('LickAppWidgetListTaskComponent', () => {
  let component: LickAppWidgetListTaskComponent;
  let fixture: ComponentFixture<LickAppWidgetListTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetListTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
