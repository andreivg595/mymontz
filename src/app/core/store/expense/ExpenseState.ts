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
  todayAmount: number;
  yesterdayAmount: number;
  weekAmount: number;
  monthAmount: number;
}
