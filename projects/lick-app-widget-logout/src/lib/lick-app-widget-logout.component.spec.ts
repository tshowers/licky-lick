import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetLogoutComponent } from './lick-app-widget-logout.component';

describe('LickAppWidgetLogoutComponent', () => {
  let component: LickAppWidgetLogoutComponent;
  let fixture: ComponentFixture<LickAppWidgetLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
