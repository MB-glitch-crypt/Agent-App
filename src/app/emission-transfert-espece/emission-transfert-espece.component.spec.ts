import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionTransfertEspeceComponent } from './emission-transfert-espece.component';

describe('EmissionTransfertEspeceComponent', () => {
  let component: EmissionTransfertEspeceComponent;
  let fixture: ComponentFixture<EmissionTransfertEspeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionTransfertEspeceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionTransfertEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
