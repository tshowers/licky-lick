import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingCarouselComponent } from './lick-marketing-carousel.component';

describe('LickMarketingCarouselComponent', () => {
  let component: LickMarketingCarouselComponent;
  let fixture: ComponentFixture<LickMarketingCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
