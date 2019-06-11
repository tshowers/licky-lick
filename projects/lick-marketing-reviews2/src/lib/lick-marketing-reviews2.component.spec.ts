import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingReviews2Component } from './lick-marketing-reviews2.component';

describe('LickMarketingReviews2Component', () => {
  let component: LickMarketingReviews2Component;
  let fixture: ComponentFixture<LickMarketingReviews2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingReviews2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingReviews2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
