import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetFooterComponent } from './lick-app-widget-footer.component';

describe('LickAppWidgetFooterComponent', () => {
  let component: LickAppWidgetFooterComponent;
  let fixture: ComponentFixture<LickAppWidgetFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
