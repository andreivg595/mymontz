import { createReducer, on } from '@ngrx/store';
import { ExpenseState } from './ExpenseState';
import { AppInitialState } from '../AppInitialState';
import {
  addExpenseSuccess,
  fetchExpensesFailure,
  fetchExpensesSuccess,
} from './expense.actions';

const initialState: ExpenseState = AppInitialState.expenses;

export const expenseReducers = createReducer(
  initialState,
  on(fetchExpensesSuccess, (state, { expenses }) => ({
    ...state,
    expenses: expenses,
  })),
  on(fetchExpensesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(addExpenseSuccess, (state, { expense }) => ({
    ...state,
    expenses: [...state.expenses, expense],
  }))
);
