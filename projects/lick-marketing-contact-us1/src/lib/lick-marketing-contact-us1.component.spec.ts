import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingContactUs1Component } from './lick-marketing-contact-us1.component';

describe('LickMarketingContactUs1Component', () => {
  let component: LickMarketingContactUs1Component;
  let fixture: ComponentFixture<LickMarketingContactUs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingContactUs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingContactUs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
