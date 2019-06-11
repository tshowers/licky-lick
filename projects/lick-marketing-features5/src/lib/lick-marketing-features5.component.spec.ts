import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingFeatures5Component } from './lick-marketing-features5.component';

describe('LickMarketingFeatures5Component', () => {
  let component: LickMarketingFeatures5Component;
  let fixture: ComponentFixture<LickMarketingFeatures5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingFeatures5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingFeatures5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
