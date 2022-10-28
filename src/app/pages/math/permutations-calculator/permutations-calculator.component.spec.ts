import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationsCalculatorComponent } from './permutations-calculator.component';

describe('PermutationsCalculatorComponent', () => {
  let component: PermutationsCalculatorComponent;
  let fixture: ComponentFixture<PermutationsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermutationsCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermutationsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
