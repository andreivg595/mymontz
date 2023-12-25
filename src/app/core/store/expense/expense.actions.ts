import { createAction, props } from '@ngrx/store';
import { Expense } from '../../models/expense.model';

export const fetchExpenses = createAction(
  '[Expense API] Fetch Today Expenses',
  props<{ userId: number; startDate: Date; endDate: Date }>()
);

export const fetchExpensesSuccess = createAction(
  '[Expense API] Fetch Today Expenses Success',
  props<{ readonly expenses: Expense[] }>()
);

export const fetchExpensesFailure = createAction(
  '[Expense API] Fetch Today Expenses Failure',
  props<{ readonly error: any }>()
);

export const addExpense = createAction(
  '[Expense Category API] Add Expense',
  props<{ readonly expense: Expense }>()
);

export const addExpenseSuccess = createAction(
  '[Expense Category API] Add Expense Success',
  props<{ readonly expense: Expense }>()
);

export const addExpenseFailure = createAction(
  '[Expense Category API] Add Expense Failure',
  props<{ readonly error: any }>()
);
