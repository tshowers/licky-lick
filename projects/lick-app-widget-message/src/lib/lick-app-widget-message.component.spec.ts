import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetMessageComponent } from './lick-app-widget-message.component';

describe('LickAppWidgetMessageComponent', () => {
  let component: LickAppWidgetMessageComponent;
  let fixture: ComponentFixture<LickAppWidgetMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
