import { TestBed } from '@angular/core/testing';

import { HttpsInterceptor } from './http.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpsInterceptor = TestBed.inject(HttpsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
