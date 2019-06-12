import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetListIconsComponent } from './lick-app-widget-list-icons.component';

describe('LickAppWidgetListIconsComponent', () => {
  let component: LickAppWidgetListIconsComponent;
  let fixture: ComponentFixture<LickAppWidgetListIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetListIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetListIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
