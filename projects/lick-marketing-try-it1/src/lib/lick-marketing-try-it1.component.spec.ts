import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingTryIt1Component } from './lick-marketing-try-it1.component';

describe('LickMarketingTryIt1Component', () => {
  let component: LickMarketingTryIt1Component;
  let fixture: ComponentFixture<LickMarketingTryIt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingTryIt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingTryIt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
