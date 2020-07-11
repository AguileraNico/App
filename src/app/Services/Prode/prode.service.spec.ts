import { TestBed } from '@angular/core/testing';

import { ProdeService } from './prode.service';

describe('ProdeService', () => {
  let service: ProdeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
