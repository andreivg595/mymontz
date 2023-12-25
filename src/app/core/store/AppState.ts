import { ExpenseCategoryState } from './expense-category/ExpenseCategoryState';
import { ExpenseState } from './expense/ExpenseState';
import { LoadingState } from './loading/LoadingState';
import { LoginState } from './login/LoginState';
import { RegisterState } from './register/RegisterState';

export interface AppState {
  loading: LoadingState;
  register: RegisterState;
  login: LoginState;
  expenses: ExpenseState;
  expenseCategories: ExpenseCategoryState;
}
