import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingAboutProduct6Component } from './lick-marketing-about-product6.component';

describe('LickMarketingAboutProduct6Component', () => {
  let component: LickMarketingAboutProduct6Component;
  let fixture: ComponentFixture<LickMarketingAboutProduct6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingAboutProduct6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingAboutProduct6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
