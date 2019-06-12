import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetListContentComponent } from './lick-app-widget-list-content.component';

describe('LickAppWidgetListContentComponent', () => {
  let component: LickAppWidgetListContentComponent;
  let fixture: ComponentFixture<LickAppWidgetListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
