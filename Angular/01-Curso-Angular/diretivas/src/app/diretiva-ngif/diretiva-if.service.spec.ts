import { TestBed, inject } from '@angular/core/testing';

import { DiretivaIfService } from './diretiva-if.service';

describe('DiretivaIfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiretivaIfService]
    });
  });

  it('should ...', inject([DiretivaIfService], (service: DiretivaIfService) => {
    expect(service).toBeTruthy();
  }));
});
