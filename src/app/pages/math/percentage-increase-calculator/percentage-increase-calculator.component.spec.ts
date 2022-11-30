import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageIncreaseCalculatorComponent } from './percentage-increase-calculator.component';

describe('PercentageIncreaseCalculatorComponent', () => {
  let component: PercentageIncreaseCalculatorComponent;
  let fixture: ComponentFixture<PercentageIncreaseCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageIncreaseCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageIncreaseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
