import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickDataComponent } from './lick-data.component';

describe('LickDataComponent', () => {
  let component: LickDataComponent;
  let fixture: ComponentFixture<LickDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
