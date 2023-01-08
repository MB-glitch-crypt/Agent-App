import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeMonnaieComponent } from './serve-monnaie.component';

describe('ServeMonnaieComponent', () => {
  let component: ServeMonnaieComponent;
  let fixture: ComponentFixture<ServeMonnaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeMonnaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeMonnaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
