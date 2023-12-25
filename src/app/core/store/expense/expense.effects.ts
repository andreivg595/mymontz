import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ExpenseService } from '../../services/expense.service';
import {
  addExpense,
  addExpenseFailure,
  addExpenseSuccess,
  fetchExpenses,
  fetchExpensesFailure,
  fetchExpensesSuccess,
} from './expense.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ExpenseEffects {
  constructor(
    private actions$: Actions,
    private expenseService: ExpenseService
  ) {}

  fetchExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchExpenses),
      switchMap(({ userId, startDate, endDate }) =>
        this.expenseService.getExpenses(userId, startDate, endDate).pipe(
          map((expenses) => fetchExpensesSuccess({ expenses })),
          catchError((error) => of(fetchExpensesFailure({ error })))
        )
      )
    )
  );

  addExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addExpense),
      switchMap(({ expense }) =>
        this.expenseService.createExpense(expense).pipe(
          map((expense) => addExpenseSuccess({ expense })),
          catchError((error) => of(addExpenseFailure({ error })))
        )
      )
    )
  );
}
