import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingParallax1Component } from './lick-marketing-parallax1.component';

describe('LickMarketingParallax1Component', () => {
  let component: LickMarketingParallax1Component;
  let fixture: ComponentFixture<LickMarketingParallax1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingParallax1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingParallax1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
