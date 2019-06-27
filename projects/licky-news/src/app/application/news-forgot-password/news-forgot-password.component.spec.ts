import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsForgotPasswordComponent } from './news-forgot-password.component';

describe('NewsForgotPasswordComponent', () => {
  let component: NewsForgotPasswordComponent;
  let fixture: ComponentFixture<NewsForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
