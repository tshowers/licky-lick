import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetLeftSideMenuComponent } from './lick-app-widget-left-side-menu.component';

describe('LickAppWidgetLeftSideMenuComponent', () => {
  let component: LickAppWidgetLeftSideMenuComponent;
  let fixture: ComponentFixture<LickAppWidgetLeftSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetLeftSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetLeftSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
