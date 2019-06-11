import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingTryIt3Component } from './lick-marketing-try-it3.component';

describe('LickMarketingTryIt3Component', () => {
  let component: LickMarketingTryIt3Component;
  let fixture: ComponentFixture<LickMarketingTryIt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingTryIt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingTryIt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
