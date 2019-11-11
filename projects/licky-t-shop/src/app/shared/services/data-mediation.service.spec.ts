import { TestBed } from '@angular/core/testing';

import { DataMediationService } from './data-mediation.service';

describe('DataMediationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMediationService = TestBed.get(DataMediationService);
    expect(service).toBeTruthy();
  });
});
