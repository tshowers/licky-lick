import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingAboutProduct2Component } from './lick-marketing-about-product2.component';

describe('LickMarketingAboutProduct2Component', () => {
  let component: LickMarketingAboutProduct2Component;
  let fixture: ComponentFixture<LickMarketingAboutProduct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingAboutProduct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingAboutProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
