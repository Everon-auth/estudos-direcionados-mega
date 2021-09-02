/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormsModelsService } from './formsModels.service';

describe('Service: FormsModels', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormsModelsService]
    });
  });

  it('should ...', inject([FormsModelsService], (service: FormsModelsService) => {
    expect(service).toBeTruthy();
  }));
});
