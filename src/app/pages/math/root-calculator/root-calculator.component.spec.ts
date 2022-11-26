import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCalculatorComponent } from './root-calculator.component';

describe('RootCalculatorComponent', () => {
  let component: RootCalculatorComponent;
  let fixture: ComponentFixture<RootCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
