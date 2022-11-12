import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyDateCalculatorComponent } from './pregnancy-date-calculator.component';

describe('PregnancyDateCalculatorComponent', () => {
  let component: PregnancyDateCalculatorComponent;
  let fixture: ComponentFixture<PregnancyDateCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnancyDateCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregnancyDateCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
