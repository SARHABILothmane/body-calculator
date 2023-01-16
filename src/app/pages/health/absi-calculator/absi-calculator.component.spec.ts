import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsiCalculatorComponent } from './absi-calculator.component';

describe('AbsiCalculatorComponent', () => {
  let component: AbsiCalculatorComponent;
  let fixture: ComponentFixture<AbsiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsiCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
