import { TestBed } from '@angular/core/testing';

import { WindowSizeService } from './window-size.service';

describe('WindowSizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
	const service: WindowSizeService = TestBed.get(WindowSizeService);
	expect(service).toBeTruthy();
  });
});
