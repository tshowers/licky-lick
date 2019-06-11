import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingPrices1Component } from './lick-marketing-prices1.component';

describe('LickMarketingPrices1Component', () => {
  let component: LickMarketingPrices1Component;
  let fixture: ComponentFixture<LickMarketingPrices1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingPrices1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingPrices1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
