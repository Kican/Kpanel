import { TestBed } from '@angular/core/testing';

import { NgbTimeStringAdapterService } from './ngb-time-string-adapter.service';

describe('NgbTimeStringAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgbTimeStringAdapterService = TestBed.get(NgbTimeStringAdapterService);
    expect(service).toBeTruthy();
  });
});
