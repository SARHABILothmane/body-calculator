import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanBodyMassCalculatorComponent } from './lean-body-mass-calculator.component';

describe('LeanBodyMassCalculatorComponent', () => {
  let component: LeanBodyMassCalculatorComponent;
  let fixture: ComponentFixture<LeanBodyMassCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanBodyMassCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeanBodyMassCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
