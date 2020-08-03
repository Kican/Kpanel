import { TestBed } from '@angular/core/testing';

import { AutoToastrService } from './auto-toastr.service';

describe('AutoToastrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoToastrService = TestBed.get(AutoToastrService);
    expect(service).toBeTruthy();
  });
});
