import { TestBed } from '@angular/core/testing';

import { LibraryAssetsService } from './library-assets.service';

describe('LibraryAssetsService', () => {
  let service: LibraryAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
