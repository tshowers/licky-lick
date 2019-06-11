import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingReviews1Component } from './lick-marketing-reviews1.component';

describe('LickMarketingReviews1Component', () => {
  let component: LickMarketingReviews1Component;
  let fixture: ComponentFixture<LickMarketingReviews1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingReviews1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingReviews1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
