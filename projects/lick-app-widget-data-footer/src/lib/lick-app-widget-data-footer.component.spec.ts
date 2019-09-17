import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetDataFooterComponent } from './lick-app-widget-data-footer.component';

describe('LickAppWidgetDataFooterComponent', () => {
  let component: LickAppWidgetDataFooterComponent;
  let fixture: ComponentFixture<LickAppWidgetDataFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetDataFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetDataFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
