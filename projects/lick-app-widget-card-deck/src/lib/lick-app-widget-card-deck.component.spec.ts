import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetCardDeckComponent } from './lick-app-widget-card-deck.component';

describe('LickAppWidgetCardDeckComponent', () => {
  let component: LickAppWidgetCardDeckComponent;
  let fixture: ComponentFixture<LickAppWidgetCardDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetCardDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
