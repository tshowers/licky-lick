import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetFindComponent } from './lick-app-widget-find.component';

describe('LickAppWidgetFindComponent', () => {
  let component: LickAppWidgetFindComponent;
  let fixture: ComponentFixture<LickAppWidgetFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
