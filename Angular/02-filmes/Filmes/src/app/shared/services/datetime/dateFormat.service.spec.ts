/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateFormatService } from './dateFormat.service';

describe('Service: DateFormat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateFormatService]
    });
  });

  it('should ...', inject([DateFormatService], (service: DateFormatService) => {
    expect(service).toBeTruthy();
  }));
});
