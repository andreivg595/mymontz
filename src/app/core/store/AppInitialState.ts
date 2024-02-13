import { AppState } from './AppState';

export const AppInitialState: AppState = {
  loading: {
    show: false,
  },
  register: {
    error: null,
    isRegistered: false,
    isRegistering: false,
  },
  login: {
    token: null,
    user: null,
    error: null,
    isLoggedIn: false,
    isLoggingIn: false,
  },
  expenses: {
    expenses: [],
    error: null,
    isDeleted: false,
    isDeleting: false,
    isUpdated: false,
    isUpdating: false,
    isCreated: false,
    isCreating: false,
    todayAmount: 0,
    yesterdayAmount: 0,
    weekAmount: 0,
    monthAmount: 0,
  },
  expenseCategories: {
    expenseCategories: [],
  },
};
