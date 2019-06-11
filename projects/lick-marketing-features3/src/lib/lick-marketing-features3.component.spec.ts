import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingFeatures3Component } from './lick-marketing-features3.component';

describe('LickMarketingFeatures3Component', () => {
  let component: LickMarketingFeatures3Component;
  let fixture: ComponentFixture<LickMarketingFeatures3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingFeatures3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingFeatures3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
