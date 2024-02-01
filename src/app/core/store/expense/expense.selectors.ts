import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExpenseState } from './ExpenseState';

export const selectExpenseState =
  createFeatureSelector<ExpenseState>('expense');

export const getExpenseState = createSelector(
  selectExpenseState,
  (state) => state
);

export const getExpenses = createSelector(
  selectExpenseState,
  (state) => state.expenses
);
