import { TestBed } from '@angular/core/testing';

import { SalaDeCineService } from './sala-de-cine.service';

describe('SalaDeCineService', () => {
  let service: SalaDeCineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaDeCineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
