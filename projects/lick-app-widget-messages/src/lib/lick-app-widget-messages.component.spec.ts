import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetMessagesComponent } from './lick-app-widget-messages.component';

describe('LickAppWidgetMessagesComponent', () => {
  let component: LickAppWidgetMessagesComponent;
  let fixture: ComponentFixture<LickAppWidgetMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
