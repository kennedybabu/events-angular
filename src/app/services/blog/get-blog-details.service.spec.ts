import { TestBed } from '@angular/core/testing';

import { GetBlogDetailsService } from './get-blog-details.service';

describe('GetBlogDetailsService', () => {
  let service: GetBlogDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBlogDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
