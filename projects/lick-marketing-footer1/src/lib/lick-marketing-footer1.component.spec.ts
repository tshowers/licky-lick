import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingFooter1Component } from './lick-marketing-footer1.component';

describe('LickMarketingFooter1Component', () => {
  let component: LickMarketingFooter1Component;
  let fixture: ComponentFixture<LickMarketingFooter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingFooter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingFooter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
