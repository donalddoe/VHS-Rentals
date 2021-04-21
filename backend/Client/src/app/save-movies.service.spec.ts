import { TestBed } from '@angular/core/testing';

import { SaveMoviesService } from './save-movies.service';

describe('SaveMoviesService', () => {
  let service: SaveMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
