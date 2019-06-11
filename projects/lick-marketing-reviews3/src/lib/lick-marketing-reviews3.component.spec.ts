import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingReviews3Component } from './lick-marketing-reviews3.component';

describe('LickMarketingReviews3Component', () => {
  let component: LickMarketingReviews3Component;
  let fixture: ComponentFixture<LickMarketingReviews3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingReviews3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingReviews3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
