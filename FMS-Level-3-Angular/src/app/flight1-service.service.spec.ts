import { TestBed } from '@angular/core/testing';

import { Flight1ServiceService } from './flight1-service.service';

describe('Flight1ServiceService', () => {
  let service: Flight1ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flight1ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
