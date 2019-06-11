import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingFeatures4Component } from './lick-marketing-features4.component';

describe('LickMarketingFeatures4Component', () => {
  let component: LickMarketingFeatures4Component;
  let fixture: ComponentFixture<LickMarketingFeatures4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingFeatures4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingFeatures4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
