import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddressEditComponent } from './email-address-edit.component';

describe('EmailAddressEditComponent', () => {
  let component: EmailAddressEditComponent;
  let fixture: ComponentFixture<EmailAddressEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAddressEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAddressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
