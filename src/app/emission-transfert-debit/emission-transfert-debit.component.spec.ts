import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionTransfertDebitComponent } from './emission-transfert-debit.component';

describe('EmissionTransfertDebitComponent', () => {
  let component: EmissionTransfertDebitComponent;
  let fixture: ComponentFixture<EmissionTransfertDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionTransfertDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionTransfertDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
