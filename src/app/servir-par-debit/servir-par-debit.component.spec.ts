import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServirParDebitComponent } from './servir-par-debit.component';

describe('ServirParDebitComponent', () => {
  let component: ServirParDebitComponent;
  let fixture: ComponentFixture<ServirParDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServirParDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServirParDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
