import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IExpenseItem } from './expense-item.model';

@Component({
  selector: 'hol-expense-day',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './expense-day.component.html',
  styleUrl: './expense-day.component.css'
})
export class ExpenseDayComponent {
  expenses: IExpenseItem[] = []; // Array to hold expense items
  expenseDayDate: string = new Date().toDateString(); // Default to today's date

  constructor() {
    // Initialize or fetch expenses data here
    this.expenses = [
      { id: '1', date: '2023-10-01', description: 'Lunch', amount: 15.00 },
      { id: '2', date: '2023-10-02', description: 'Transport', amount: 5.00 }
    ];
  }
}
