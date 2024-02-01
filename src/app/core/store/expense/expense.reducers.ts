import { createReducer, on } from '@ngrx/store';
import { ExpenseState } from './ExpenseState';
import { AppInitialState } from '../AppInitialState';
import {
  addExpense,
  addExpenseFailure,
  addExpenseSuccess,
  deleteExpense,
  deleteExpenseFailure,
  deleteExpenseSuccess,
  fetchExpenses,
  fetchExpensesFailure,
  fetchExpensesSuccess,
  updateExpense,
  updateExpenseFailure,
  updateExpenseSuccess,
} from './expense.actions';

const initialState: ExpenseState = AppInitialState.expenses;

export const expenseReducers = createReducer(
  initialState,
  on(fetchExpenses, (state) => ({
    ...state,
    isCreated: false,
    isCreating: false,
    isUpdated: false,
    isUpdating: false,
    isDeleted: false,
    isDeleting: false,
    error: null,
  })),
  on(fetchExpensesSuccess, (state, { expenses }) => ({
    ...state,
    expenses: expenses,
  })),
  on(fetchExpensesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(addExpense, (state) => ({
    ...state,
    isCreated: false,
    isCreating: true,
    isUpdated: false,
    isUpdating: false,
    isDeleted: false,
    isDeleting: false,
    error: null,
  })),
  on(addExpenseSuccess, (state, { expense }) => ({
    ...state,
    expenses: [...state.expenses, expense],
    isCreated: true,
    isCreating: false,
  })),
  on(addExpenseFailure, (state, { error }) => ({
    ...state,
    isCreated: false,
    isCreating: false,
    error,
  })),
  on(updateExpense, (state) => ({
    ...state,
    isCreated: false,
    isCreating: false,
    isUpdated: false,
    isUpdating: true,
    isDeleted: false,
    isDeleting: false,
    error: null,
  })),
  on(updateExpenseSuccess, (state, { expense }) => ({
    ...state,
    expenses: [
      ...state.expenses.map((e) => (e.id === expense.id ? expense : e)),
    ],
    isUpdated: true,
    isUpdating: false,
  })),
  on(updateExpenseFailure, (state, { error }) => ({
    ...state,
    isUpdated: false,
    isUpdating: false,
    error,
  })),
  on(deleteExpense, (state) => ({
    ...state,
    isCreated: false,
    isCreating: false,
    isUpdated: false,
    isUpdating: false,
    isDeleted: false,
    isDeleting: true,
    error: null,
  })),
  on(deleteExpenseSuccess, (state, { id }) => ({
    ...state,
    expenses: [...state.expenses.filter((e) => e.id !== id)],
    isDeleted: true,
    isDeleting: false,
  })),
  on(deleteExpenseFailure, (state, { error }) => ({
    ...state,
    isDeleted: false,
    isDeleting: false,
    error,
  }))
);
