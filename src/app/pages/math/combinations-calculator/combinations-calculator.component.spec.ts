import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationsCalculatorComponent } from './combinations-calculator.component';

describe('CombinationsCalculatorComponent', () => {
  let component: CombinationsCalculatorComponent;
  let fixture: ComponentFixture<CombinationsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationsCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinationsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
