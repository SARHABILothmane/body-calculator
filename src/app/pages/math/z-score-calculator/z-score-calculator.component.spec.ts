import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZScoreCalculatorComponent } from './z-score-calculator.component';

describe('ZScoreCalculatorComponent', () => {
  let component: ZScoreCalculatorComponent;
  let fixture: ComponentFixture<ZScoreCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZScoreCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZScoreCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
