import { createReducer, on } from '@ngrx/store';
import { AppInitialState } from '../AppInitialState';
import { ExpenseCategoryState } from './ExpenseCategoryState';
import {
  fetchExpenseCategoriesFailure,
  fetchExpenseCategoriesSuccess,
} from './expense-category.actions';

const initialState: ExpenseCategoryState = AppInitialState.expenseCategories;

export const expenseCategoryReducers = createReducer(
  initialState,
  on(fetchExpenseCategoriesSuccess, (state, { expenseCategories }) => ({
    ...state,
    expenseCategories,
  })),
  on(fetchExpenseCategoriesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
