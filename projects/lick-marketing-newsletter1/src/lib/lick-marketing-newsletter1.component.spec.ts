import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingNewsletter1Component } from './lick-marketing-newsletter1.component';

describe('LickMarketingNewsletter1Component', () => {
  let component: LickMarketingNewsletter1Component;
  let fixture: ComponentFixture<LickMarketingNewsletter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingNewsletter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingNewsletter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
