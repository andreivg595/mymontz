import { createAction, props } from '@ngrx/store';
import { Expense } from '../../models/expense.model';

export const fetchExpenses = createAction(
  '[Expense API] Fetch Expenses',
  props<{ userId: number; startDate: Date; endDate: Date }>()
);

export const fetchExpensesSuccess = createAction(
  '[Expense API] Fetch Expenses Success',
  props<{ readonly expenses: Expense[] }>()
);

export const fetchExpensesFailure = createAction(
  '[Expense API] Fetch Expenses Failure',
  props<{ readonly error: any }>()
);

export const getExpensesTodayAmount = createAction(
  '[Expense API] Get Expenses Today Amount',
  props<{ userId: number; date: Date }>()
);

export const getExpensesTodayAmountSuccess = createAction(
  '[Expense API] Get Expenses Today Amount Success',
  props<{ readonly todayAmount: number }>()
);

export const getExpensesTodayAmountFailure = createAction(
  '[Expense API] Get Expenses Today Amount Failure',
  props<{ readonly error: any }>()
);

export const getExpensesYesterdayAmount = createAction(
  '[Expense API] Get Expenses Yesterday Amount',
  props<{ userId: number; date: Date }>()
);

export const getExpensesYesterdayAmountSuccess = createAction(
  '[Expense API] Get Expenses Yesterday Amount Success',
  props<{ readonly yesterdayAmount: number }>()
);

export const getExpensesYesterdayAmountFailure = createAction(
  '[Expense API] Get Expenses Yesterday Amount Failure',
  props<{ readonly error: any }>()
);

export const getExpensesWeekAmount = createAction(
  '[Expense API] Get Expenses Week Amount',
  props<{ userId: number; date: Date }>()
);

export const getExpensesWeekAmountSuccess = createAction(
  '[Expense API] Get Expenses Week Amount Success',
  props<{ readonly weekAmount: number }>()
);

export const getExpensesWeekAmountFailure = createAction(
  '[Expense API] Get Expenses Week Amount Failure',
  props<{ readonly error: any }>()
);

export const getExpensesMonthAmount = createAction(
  '[Expense API] Get Expenses Month Amount',
  props<{ userId: number; date: Date }>()
);

export const getExpensesMonthAmountSuccess = createAction(
  '[Expense API] Get Expenses Month Amount Success',
  props<{ readonly monthAmount: number }>()
);

export const getExpensesMonthAmountFailure = createAction(
  '[Expense API] Get Expenses Month Amount Failure',
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

export const purgeExpenses = createAction('[Expenses] Purge Expenses');
