import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ExpenseService } from '../../services/expense.service';
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
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ExpenseEffects {
  constructor(
    private actions$: Actions,
    private expenseService: ExpenseService
  ) {}

  readonly fetchExpenses$ = createEffect(() =>
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

  readonly addExpense$ = createEffect(() =>
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

  readonly updateExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateExpense),
      switchMap(({ expense }) =>
        this.expenseService.updateExpense(expense).pipe(
          map((expense) => updateExpenseSuccess({ expense })),
          catchError((error) => of(updateExpenseFailure({ error })))
        )
      )
    )
  );

  readonly deleteExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteExpense),
      switchMap(({ id }) =>
        this.expenseService.deleteExpense(id).pipe(
          map(() => deleteExpenseSuccess({ id })),
          catchError((error) => {
            return of(deleteExpenseFailure({ error }));
          })
        )
      )
    )
  );
}
