import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentCalculatorComponent } from './exponent-calculator.component';

describe('ExponentCalculatorComponent', () => {
  let component: ExponentCalculatorComponent;
  let fixture: ComponentFixture<ExponentCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExponentCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExponentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
