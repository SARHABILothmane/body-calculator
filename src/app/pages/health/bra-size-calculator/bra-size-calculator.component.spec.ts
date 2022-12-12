import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraSizeCalculatorComponent } from './bra-size-calculator.component';

describe('BraSizeCalculatorComponent', () => {
  let component: BraSizeCalculatorComponent;
  let fixture: ComponentFixture<BraSizeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraSizeCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraSizeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
