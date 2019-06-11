import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingFeatures1Component } from './lick-marketing-features1.component';

describe('LickMarketingFeatures1Component', () => {
  let component: LickMarketingFeatures1Component;
  let fixture: ComponentFixture<LickMarketingFeatures1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingFeatures1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingFeatures1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
