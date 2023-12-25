import { ExpenseCategory } from './expense-category';
import { User } from './user.model';

export interface Expense {
  id: number;
  user: User;
  expenseCategory: ExpenseCategory;
  date: Date;
  amount: number;
  note: string;
}
