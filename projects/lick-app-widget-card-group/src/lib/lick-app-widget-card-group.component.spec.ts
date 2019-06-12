import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetCardGroupComponent } from './lick-app-widget-card-group.component';

describe('LickAppWidgetCardGroupComponent', () => {
  let component: LickAppWidgetCardGroupComponent;
  let fixture: ComponentFixture<LickAppWidgetCardGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetCardGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
