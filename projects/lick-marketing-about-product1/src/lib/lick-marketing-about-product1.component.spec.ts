import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingAboutProduct1Component } from './lick-marketing-about-product1.component';

describe('LickMarketingAboutProduct1Component', () => {
  let component: LickMarketingAboutProduct1Component;
  let fixture: ComponentFixture<LickMarketingAboutProduct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingAboutProduct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingAboutProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
