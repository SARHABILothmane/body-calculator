import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageErrorCalculatorComponent } from './percentage-error-calculator.component';

describe('PercentageErrorCalculatorComponent', () => {
  let component: PercentageErrorCalculatorComponent;
  let fixture: ComponentFixture<PercentageErrorCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageErrorCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageErrorCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
