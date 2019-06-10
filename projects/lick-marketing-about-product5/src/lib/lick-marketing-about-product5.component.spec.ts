import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingAboutProduct5Component } from './lick-marketing-about-product5.component';

describe('LickMarketingAboutProduct5Component', () => {
  let component: LickMarketingAboutProduct5Component;
  let fixture: ComponentFixture<LickMarketingAboutProduct5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingAboutProduct5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingAboutProduct5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
