import { TestBed, inject } from '@angular/core/testing';

import { InfodeskService } from './infodesk.service';

describe('InfodeskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfodeskService]
    });
  });

  it('should be created', inject([InfodeskService], (service: InfodeskService) => {
    expect(service).toBeTruthy();
  }));
});
