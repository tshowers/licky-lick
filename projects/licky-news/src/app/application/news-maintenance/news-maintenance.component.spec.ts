import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMaintenanceComponent } from './news-maintenance.component';

describe('NewsMaintenanceComponent', () => {
  let component: NewsMaintenanceComponent;
  let fixture: ComponentFixture<NewsMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
