import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingFeatures2Component } from './lick-marketing-features2.component';

describe('LickMarketingFeatures2Component', () => {
  let component: LickMarketingFeatures2Component;
  let fixture: ComponentFixture<LickMarketingFeatures2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingFeatures2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingFeatures2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
