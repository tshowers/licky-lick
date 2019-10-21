import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetUnderConstructionComponent } from './lick-app-widget-under-construction.component';

describe('LickAppWidgetUnderConstructionComponent', () => {
  let component: LickAppWidgetUnderConstructionComponent;
  let fixture: ComponentFixture<LickAppWidgetUnderConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetUnderConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
