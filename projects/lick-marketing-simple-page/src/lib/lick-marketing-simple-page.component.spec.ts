import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingSimplePageComponent } from './lick-marketing-simple-page.component';

describe('LickMarketingSimplePageComponent', () => {
  let component: LickMarketingSimplePageComponent;
  let fixture: ComponentFixture<LickMarketingSimplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingSimplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
