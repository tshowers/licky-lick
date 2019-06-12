import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetListBadgesComponent } from './lick-app-widget-list-badges.component';

describe('LickAppWidgetListBadgesComponent', () => {
  let component: LickAppWidgetListBadgesComponent;
  let fixture: ComponentFixture<LickAppWidgetListBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetListBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetListBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
