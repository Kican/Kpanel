import { TestBed } from '@angular/core/testing';

import { UsersManagerService } from './users-manager.service';

describe('UsersManagerServiceService', () => {
  let service: UsersManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
