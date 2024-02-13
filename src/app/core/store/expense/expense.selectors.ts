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

export const getTodayAmount = createSelector(
  selectExpenseState,
  (state) => state.todayAmount
);

export const getYesterdayAmount = createSelector(
  selectExpenseState,
  (state) => state.yesterdayAmount
);

export const getWeekAmount = createSelector(
  selectExpenseState,
  (state) => state.weekAmount
);

export const getMonthAmount = createSelector(
  selectExpenseState,
  (state) => state.monthAmount
);
