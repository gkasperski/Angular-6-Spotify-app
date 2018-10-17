import { TestBed } from '@angular/core/testing';

import { MusicSearchService } from './music-search.service';

describe('MusicSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicSearchService = TestBed.get(MusicSearchService);
    expect(service).toBeTruthy();
  });
});
