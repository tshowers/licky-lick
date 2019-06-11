import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingTryIt2Component } from './lick-marketing-try-it2.component';

describe('LickMarketingTryIt2Component', () => {
  let component: LickMarketingTryIt2Component;
  let fixture: ComponentFixture<LickMarketingTryIt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingTryIt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingTryIt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
