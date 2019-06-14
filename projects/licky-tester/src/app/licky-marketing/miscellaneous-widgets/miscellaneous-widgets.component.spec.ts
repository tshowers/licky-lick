import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousWidgetsComponent } from './miscellaneous-widgets.component';

describe('MiscellaneousWidgetsComponent', () => {
  let component: MiscellaneousWidgetsComponent;
  let fixture: ComponentFixture<MiscellaneousWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
