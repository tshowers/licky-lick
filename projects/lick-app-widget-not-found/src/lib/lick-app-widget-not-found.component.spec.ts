import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetNotFoundComponent } from './lick-app-widget-not-found.component';

describe('LickAppWidgetNotFoundComponent', () => {
  let component: LickAppWidgetNotFoundComponent;
  let fixture: ComponentFixture<LickAppWidgetNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
