import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingPrices2Component } from './lick-marketing-prices2.component';

describe('LickMarketingPrices2Component', () => {
  let component: LickMarketingPrices2Component;
  let fixture: ComponentFixture<LickMarketingPrices2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingPrices2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingPrices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
