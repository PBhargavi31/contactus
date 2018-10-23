import { TestBed, inject } from '@angular/core/testing';

import { FeedServiceService } from './feedback.service';

describe('FeedbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedServiceService]
    });
  });

  it('should be created', inject([FeedServiceService], (service: FeedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
