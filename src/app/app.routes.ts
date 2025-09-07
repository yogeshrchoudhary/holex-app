import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpenseDayComponent } from './expense-day/expense-day.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home - Holiday Expense Manager'},
    {path: 'expenses', component: ExpenseDayComponent, title: 'Expenses - Holiday Expense Manager'},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
