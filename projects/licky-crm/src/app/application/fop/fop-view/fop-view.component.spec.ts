import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FopViewComponent } from './fop-view.component';

describe('FopViewComponent', () => {
  let component: FopViewComponent;
  let fixture: ComponentFixture<FopViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FopViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
