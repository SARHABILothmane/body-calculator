import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageDecreaseCalculatorComponent } from './percentage-decrease-calculator.component';

describe('PercentageDecreaseCalculatorComponent', () => {
  let component: PercentageDecreaseCalculatorComponent;
  let fixture: ComponentFixture<PercentageDecreaseCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageDecreaseCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageDecreaseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
