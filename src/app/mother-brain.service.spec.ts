import {TestBed} from '@angular/core/testing';

import {MotherBrainService} from './mother-brain.service';

describe('MotherBrainService', () => {
  let service: MotherBrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotherBrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
