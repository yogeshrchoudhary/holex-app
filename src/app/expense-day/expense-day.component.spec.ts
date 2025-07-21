import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDayComponent } from './expense-day.component';

describe('ExpenseDayComponent', () => {
  let component: ExpenseDayComponent;
  let fixture: ComponentFixture<ExpenseDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
