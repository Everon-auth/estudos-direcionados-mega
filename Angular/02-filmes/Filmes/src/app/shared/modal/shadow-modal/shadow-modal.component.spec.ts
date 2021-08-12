import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowModalComponent } from './shadow-modal.component';

describe('ShadowModalComponent', () => {
  let component: ShadowModalComponent;
  let fixture: ComponentFixture<ShadowModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
