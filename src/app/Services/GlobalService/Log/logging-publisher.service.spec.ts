import { TestBed } from '@angular/core/testing';

import { LoggingPublisherService } from './logging-publisher.service';

describe('LoggingPublisherService', () => {
  let service: LoggingPublisherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingPublisherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
