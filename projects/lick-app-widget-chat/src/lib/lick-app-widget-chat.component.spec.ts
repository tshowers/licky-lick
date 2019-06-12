import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetChatComponent } from './lick-app-widget-chat.component';

describe('LickAppWidgetChatComponent', () => {
  let component: LickAppWidgetChatComponent;
  let fixture: ComponentFixture<LickAppWidgetChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
