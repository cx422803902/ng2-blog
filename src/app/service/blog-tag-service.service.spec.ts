import { TestBed, inject } from '@angular/core/testing';

import { BlogTagServiceService } from './blog-tag-service.service';

describe('BlogTagServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogTagServiceService]
    });
  });

  it('should ...', inject([BlogTagServiceService], (service: BlogTagServiceService) => {
    expect(service).toBeTruthy();
  }));
});
