import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetRightSideMenuComponent } from './lick-app-widget-right-side-menu.component';

describe('LickAppWidgetRightSideMenuComponent', () => {
  let component: LickAppWidgetRightSideMenuComponent;
  let fixture: ComponentFixture<LickAppWidgetRightSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetRightSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetRightSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
