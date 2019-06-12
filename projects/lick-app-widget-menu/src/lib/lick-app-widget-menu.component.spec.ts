import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetMenuComponent } from './lick-app-widget-menu.component';

describe('LickAppWidgetMenuComponent', () => {
  let component: LickAppWidgetMenuComponent;
  let fixture: ComponentFixture<LickAppWidgetMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
