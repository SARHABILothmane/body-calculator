import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCalculatorComponent } from './log-calculator.component';

describe('LogCalculatorComponent', () => {
  let component: LogCalculatorComponent;
  let fixture: ComponentFixture<LogCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
