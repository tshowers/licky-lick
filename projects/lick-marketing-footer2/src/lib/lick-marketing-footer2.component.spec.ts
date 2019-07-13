import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingFooter2Component } from './lick-marketing-footer2.component';

describe('LickMarketingFooter2Component', () => {
  let component: LickMarketingFooter2Component;
  let fixture: ComponentFixture<LickMarketingFooter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingFooter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingFooter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
