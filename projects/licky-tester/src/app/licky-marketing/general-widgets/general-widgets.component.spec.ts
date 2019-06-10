import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralWidgetsComponent } from './general-widgets.component';

describe('GeneralWidgetsComponent', () => {
  let component: GeneralWidgetsComponent;
  let fixture: ComponentFixture<GeneralWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
