import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberViewComponent } from './phone-number-view.component';

describe('PhoneNumberViewComponent', () => {
  let component: PhoneNumberViewComponent;
  let fixture: ComponentFixture<PhoneNumberViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
