import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetLoginComponent } from './lick-app-widget-login.component';

describe('LickAppWidgetLoginComponent', () => {
  let component: LickAppWidgetLoginComponent;
  let fixture: ComponentFixture<LickAppWidgetLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
