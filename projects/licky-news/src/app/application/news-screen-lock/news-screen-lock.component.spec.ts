import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsScreenLockComponent } from './news-screen-lock.component';

describe('NewsScreenLockComponent', () => {
  let component: NewsScreenLockComponent;
  let fixture: ComponentFixture<NewsScreenLockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsScreenLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsScreenLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
