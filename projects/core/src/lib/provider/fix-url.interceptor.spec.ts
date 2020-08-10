import { TestBed } from '@angular/core/testing';

import { FixUrlInterceptor } from './fix-url.interceptor';

describe('FixUrlInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FixUrlInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FixUrlInterceptor = TestBed.inject(FixUrlInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
