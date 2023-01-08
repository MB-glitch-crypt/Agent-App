import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertAccountComponent } from './transfert-account.component';

describe('TransfertAccountComponent', () => {
  let component: TransfertAccountComponent;
  let fixture: ComponentFixture<TransfertAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
