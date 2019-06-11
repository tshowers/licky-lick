import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingIntegration1Component } from './lick-marketing-integration1.component';

describe('LickMarketingIntegration1Component', () => {
  let component: LickMarketingIntegration1Component;
  let fixture: ComponentFixture<LickMarketingIntegration1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingIntegration1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingIntegration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
