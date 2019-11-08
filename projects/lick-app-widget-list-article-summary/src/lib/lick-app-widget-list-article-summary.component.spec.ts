import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetListArticleSummaryComponent } from './lick-app-widget-list-article-summary.component';

describe('LickAppWidgetListArticleSummaryComponent', () => {
  let component: LickAppWidgetListArticleSummaryComponent;
  let fixture: ComponentFixture<LickAppWidgetListArticleSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetListArticleSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetListArticleSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
