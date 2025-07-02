import { TestBed } from '@angular/core/testing';

import { SpecsheetService } from './specsheet.service';

describe('SpecsheetService', () => {
  let service: SpecsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
