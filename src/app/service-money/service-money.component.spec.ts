import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMoneyComponent } from './service-money.component';

describe('ServiceMoneyComponent', () => {
  let component: ServiceMoneyComponent;
  let fixture: ComponentFixture<ServiceMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
