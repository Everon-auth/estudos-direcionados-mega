import { TestBed, async, inject } from '@angular/core/testing';

import { CursosGuard } from './cursos.guard';

describe('CursoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosGuard]
    });
  });

  it('should ...', inject([CursosGuard], (guard: CursosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
