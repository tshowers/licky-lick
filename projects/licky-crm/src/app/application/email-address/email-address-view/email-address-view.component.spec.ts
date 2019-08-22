import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddressViewComponent } from './email-address-view.component';

describe('EmailAddressViewComponent', () => {
  let component: EmailAddressViewComponent;
  let fixture: ComponentFixture<EmailAddressViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAddressViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAddressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
