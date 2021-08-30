import { TestBed } from '@angular/core/testing';

import { ApiclientService } from './apicliente.service';

describe('ApiclienteService', () => {
  let service: ApiclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
