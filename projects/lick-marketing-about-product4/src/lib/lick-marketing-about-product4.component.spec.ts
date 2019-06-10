import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingAboutProduct4Component } from './lick-marketing-about-product4.component';

describe('LickMarketingAboutProduct4Component', () => {
  let component: LickMarketingAboutProduct4Component;
  let fixture: ComponentFixture<LickMarketingAboutProduct4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingAboutProduct4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingAboutProduct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
