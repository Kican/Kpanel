import { TestBed } from '@angular/core/testing';

import { SideBarService } from './side-bar.service';

describe('SideBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
	const service: SideBarService = TestBed.get(SideBarService);
	expect(service).toBeTruthy();
  });
});
