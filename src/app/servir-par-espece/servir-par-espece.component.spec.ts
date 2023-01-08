import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServirParEspeceComponent } from './servir-par-espece.component';

describe('ServirParEspeceComponent', () => {
  let component: ServirParEspeceComponent;
  let fixture: ComponentFixture<ServirParEspeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServirParEspeceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServirParEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
