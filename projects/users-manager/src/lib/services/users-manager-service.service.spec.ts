import { TestBed } from '@angular/core/testing';

import { UsersManagerServiceService } from './users-manager-service.service';

describe('UsersManagerServiceService', () => {
  let service: UsersManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
