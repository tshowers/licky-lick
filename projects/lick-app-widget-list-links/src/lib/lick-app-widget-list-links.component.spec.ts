import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetListLinksComponent } from './lick-app-widget-list-links.component';

describe('LickAppWidgetListLinksComponent', () => {
  let component: LickAppWidgetListLinksComponent;
  let fixture: ComponentFixture<LickAppWidgetListLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetListLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetListLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
