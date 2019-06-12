import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetFeedComponent } from './lick-app-widget-feed.component';

describe('LickAppWidgetFeedComponent', () => {
  let component: LickAppWidgetFeedComponent;
  let fixture: ComponentFixture<LickAppWidgetFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
