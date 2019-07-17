import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetProfileComponent } from './lick-app-widget-profile.component';

describe('LickAppWidgetProfileComponent', () => {
  let component: LickAppWidgetProfileComponent;
  let fixture: ComponentFixture<LickAppWidgetProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
