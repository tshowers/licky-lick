import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWidgetsComponent } from './news-widgets.component';

describe('NewsWidgetsComponent', () => {
  let component: NewsWidgetsComponent;
  let fixture: ComponentFixture<NewsWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
