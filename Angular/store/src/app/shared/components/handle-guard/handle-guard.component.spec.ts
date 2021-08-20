import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleGuardComponent } from './handle-guard.component';

describe('HandleGuardComponent', () => {
  let component: HandleGuardComponent;
  let fixture: ComponentFixture<HandleGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
