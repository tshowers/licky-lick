import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FopListComponent } from './fop-list.component';

describe('FopListComponent', () => {
  let component: FopListComponent;
  let fixture: ComponentFixture<FopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
