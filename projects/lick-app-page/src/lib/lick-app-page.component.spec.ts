import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppPageComponent } from './lick-app-page.component';

describe('LickAppPageComponent', () => {
  let component: LickAppPageComponent;
  let fixture: ComponentFixture<LickAppPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
