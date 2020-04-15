import { TestBed } from '@angular/core/testing';

import { GlobalAPIService } from './global.api.service';

describe('GlobalAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalAPIService = TestBed.get(GlobalAPIService);
    expect(service).toBeTruthy();
  });
});
