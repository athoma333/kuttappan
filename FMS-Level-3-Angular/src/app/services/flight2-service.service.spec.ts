import { TestBed } from '@angular/core/testing';

import { Flight2ServiceService } from './flight2-service.service';

describe('Flight2ServiceService', () => {
  let service: Flight2ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flight2ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
