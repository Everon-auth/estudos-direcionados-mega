import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormFilmsComponent } from './add-form-films.component';

describe('AddFormFilmsComponent', () => {
  let component: AddFormFilmsComponent;
  let fixture: ComponentFixture<AddFormFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
