import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingAboutProduct7Component } from './lick-marketing-about-product7.component';

describe('LickMarketingAboutProduct7Component', () => {
  let component: LickMarketingAboutProduct7Component;
  let fixture: ComponentFixture<LickMarketingAboutProduct7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingAboutProduct7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingAboutProduct7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
