import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingIntegration2Component } from './lick-marketing-integration2.component';

describe('LickMarketingIntegration2Component', () => {
  let component: LickMarketingIntegration2Component;
  let fixture: ComponentFixture<LickMarketingIntegration2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingIntegration2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingIntegration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
