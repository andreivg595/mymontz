import { createAction, props } from '@ngrx/store';
import { ExpenseCategory } from '../../models/expense-category';

export const fetchExpenseCategories = createAction(
  '[Expense Category API] Fetch Expense Categories'
);

export const fetchExpenseCategoriesSuccess = createAction(
  '[Expense Category API] Fetch Expense Categories Success',
  props<{ readonly expenseCategories: ExpenseCategory[] }>()
);

export const fetchExpenseCategoriesFailure = createAction(
  '[Expense Category API] Fetch Expense Categories Failure',
  props<{ readonly error: any }>()
);
