import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetChatPopupComponent } from './lick-app-widget-chat-popup.component';

describe('LickAppWidgetChatPopupComponent', () => {
  let component: LickAppWidgetChatPopupComponent;
  let fixture: ComponentFixture<LickAppWidgetChatPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetChatPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetChatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
