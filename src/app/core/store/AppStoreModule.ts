import { ActionReducer, INIT, StoreModule, UPDATE } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loadingReducer } from './loading/loading.reducers';
import { registerReducer } from './register/register.reducers';
import { loginReducer } from './login/login.reducers';
import { RegisterEffects } from './register/register.effects';
import { LoginEffects } from './login/login.effects';
import { LoginState } from './login/LoginState';
import { expenseReducers } from './expense/expense.reducers';
import { ExpenseEffects } from './expense/expense.effects';
import { expenseCategoryReducers } from './expense-category/expense-category.reducers';
import { ExpenseCategoryEffects } from './expense-category/expense-category.effects';

export const hydrationMetaReducer = (
  reducer: ActionReducer<LoginState>
): ActionReducer<LoginState> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};

export const AppStoreModule = [
  StoreModule.forRoot([]),
  StoreModule.forFeature('loading', loadingReducer),
  StoreModule.forFeature('register', registerReducer),
  StoreModule.forFeature('login', loginReducer, {
    metaReducers: [hydrationMetaReducer],
  }),
  StoreModule.forFeature('expense', expenseReducers),
  StoreModule.forFeature('expenseCategory', expenseCategoryReducers),
  EffectsModule.forRoot([]),
  EffectsModule.forFeature([
    RegisterEffects,
    LoginEffects,
    ExpenseEffects,
    ExpenseCategoryEffects,
  ]),
];
