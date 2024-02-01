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
  '[Expense API] Add Expense',
  props<{ readonly expense: Expense }>()
);

export const addExpenseSuccess = createAction(
  '[Expense API] Add Expense Success',
  props<{ readonly expense: Expense }>()
);

export const addExpenseFailure = createAction(
  '[Expense API] Add Expense Failure',
  props<{ readonly error: any }>()
);

export const updateExpense = createAction(
  '[Expense API] Update Expense',
  props<{ readonly expense: Expense }>()
);

export const updateExpenseSuccess = createAction(
  '[Expense API] Update Expense Success',
  props<{ readonly expense: Expense }>()
);

export const updateExpenseFailure = createAction(
  '[Expense API] Update Expense Failure',
  props<{ readonly error: any }>()
);

export const deleteExpense = createAction(
  '[Expense API] Delete Expense',
  props<{ readonly id: number }>()
);

export const deleteExpenseSuccess = createAction(
  '[Expense API] Delete Expense Success',
  props<{ readonly id: number }>()
);

export const deleteExpenseFailure = createAction(
  '[Expense API] Delete Expense Failure',
  props<{ readonly error: any }>()
);
