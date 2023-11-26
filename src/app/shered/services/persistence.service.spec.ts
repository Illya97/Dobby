import { TestBed } from '@angular/core/testing';

import { PersistenceServiceTsService } from './persistence-service-ts.service';

describe('PersistanceServiceTsService', () => {
  let service: PersistenceServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistenceServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
