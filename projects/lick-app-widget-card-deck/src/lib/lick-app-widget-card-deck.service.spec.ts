import { TestBed } from '@angular/core/testing';

import { LickAppWidgetCardDeckService } from './lick-app-widget-card-deck.service';

describe('LickAppWidgetCardDeckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LickAppWidgetCardDeckService = TestBed.get(LickAppWidgetCardDeckService);
    expect(service).toBeTruthy();
  });
});
