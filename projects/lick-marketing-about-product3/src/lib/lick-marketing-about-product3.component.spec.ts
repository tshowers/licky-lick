import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingAboutProduct3Component } from './lick-marketing-about-product3.component';

describe('LickMarketingAboutProduct3Component', () => {
  let component: LickMarketingAboutProduct3Component;
  let fixture: ComponentFixture<LickMarketingAboutProduct3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingAboutProduct3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingAboutProduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
