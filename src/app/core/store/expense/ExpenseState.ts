import { Expense } from '../../models/expense.model';

export interface ExpenseState {
  expenses: Expense[];
  error: any;
  isDeleted: boolean;
  isDeleting: boolean;
  isUpdated: boolean;
  isUpdating: boolean;
  isCreated: boolean;
  isCreating: boolean;
}
