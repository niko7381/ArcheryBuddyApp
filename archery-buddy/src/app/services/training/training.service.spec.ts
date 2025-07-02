import { TestBed } from '@angular/core/testing';

import { TrainingService } from './training.service';

describe('PhysicalTrainingService', () => {
  let service: TrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
