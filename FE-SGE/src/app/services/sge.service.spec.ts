import { TestBed } from '@angular/core/testing';

import { SGEService } from './sge.service';

describe('SGEService', () => {
  let service: SGEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SGEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
