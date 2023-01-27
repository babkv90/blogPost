import { TestBed } from '@angular/core/testing';

import { BlogContentServiceService } from './blog-content-service.service';

describe('BlogContentServiceService', () => {
  let service: BlogContentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogContentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
