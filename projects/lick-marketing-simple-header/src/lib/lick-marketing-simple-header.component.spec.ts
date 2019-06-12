import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingSimpleHeaderComponent } from './lick-marketing-simple-header.component';

describe('LickMarketingSimpleHeaderComponent', () => {
  let component: LickMarketingSimpleHeaderComponent;
  let fixture: ComponentFixture<LickMarketingSimpleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingSimpleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingSimpleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
