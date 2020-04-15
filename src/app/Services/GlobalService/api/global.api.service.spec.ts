import { TestBed } from '@angular/core/testing';

import { APIService } from './global.api.service';

describe('GlobalAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIService = TestBed.get(APIService);
    expect(service).toBeTruthy();
  });
});
