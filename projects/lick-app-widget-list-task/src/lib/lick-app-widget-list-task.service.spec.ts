import { TestBed } from '@angular/core/testing';

import { LickAppWidgetListTaskService } from './lick-app-widget-list-task.service';

describe('LickAppWidgetListTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetListTaskService = TestBed.get(LickAppWidgetListTaskService);
    expect(service).toBeTruthy();
  });
});
