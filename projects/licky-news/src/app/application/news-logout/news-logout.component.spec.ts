import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLogoutComponent } from './news-logout.component';

describe('NewsLogoutComponent', () => {
  let component: NewsLogoutComponent;
  let fixture: ComponentFixture<NewsLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
