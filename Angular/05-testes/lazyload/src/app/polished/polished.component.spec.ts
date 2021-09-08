import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishedComponent } from './polished.component';

describe('PolishedComponent', () => {
  let component: PolishedComponent;
  let fixture: ComponentFixture<PolishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
