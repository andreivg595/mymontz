import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExpenseCategoryState } from './ExpenseCategoryState';

export const selectExpenseCategoryState =
  createFeatureSelector<ExpenseCategoryState>('expenseCategory');

export const getExpenseCategories = createSelector(
  selectExpenseCategoryState,
  (state) => state.expenseCategories
);
