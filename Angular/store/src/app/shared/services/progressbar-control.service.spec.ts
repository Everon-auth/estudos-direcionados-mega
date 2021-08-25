import { TestBed } from '@angular/core/testing';

import { ProgressbarControlService } from './progressbar-control.service';

describe('ProgressbarControlService', () => {
  let service: ProgressbarControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressbarControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
