import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingLightbox1Component } from './lick-marketing-lightbox1.component';

describe('LickMarketingLightbox1Component', () => {
  let component: LickMarketingLightbox1Component;
  let fixture: ComponentFixture<LickMarketingLightbox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingLightbox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingLightbox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
