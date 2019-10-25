import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetArticleComponent } from './lick-app-widget-article.component';

describe('LickAppWidgetArticleComponent', () => {
  let component: LickAppWidgetArticleComponent;
  let fixture: ComponentFixture<LickAppWidgetArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
