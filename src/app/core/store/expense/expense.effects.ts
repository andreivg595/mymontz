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
  getExpensesMonthAmount,
  getExpensesMonthAmountFailure,
  getExpensesMonthAmountSuccess,
  getExpensesTodayAmount,
  getExpensesTodayAmountFailure,
  getExpensesTodayAmountSuccess,
  getExpensesWeekAmount,
  getExpensesWeekAmountFailure,
  getExpensesWeekAmountSuccess,
  getExpensesYesterdayAmount,
  getExpensesYesterdayAmountFailure,
  getExpensesYesterdayAmountSuccess,
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

  readonly getExpensesTodayAmount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getExpensesTodayAmount),
      switchMap(({ userId, date }) =>
        this.expenseService.getExpensesTotalAmountByDate(userId, date).pipe(
          map((todayAmount) => getExpensesTodayAmountSuccess({ todayAmount })),
          catchError((error) => of(getExpensesTodayAmountFailure({ error })))
        )
      )
    )
  );

  readonly getExpensesYesterdayAmount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getExpensesYesterdayAmount),
      switchMap(({ userId, date }) =>
        this.expenseService.getExpensesTotalAmountByDate(userId, date).pipe(
          map((yesterdayAmount) =>
            getExpensesYesterdayAmountSuccess({ yesterdayAmount })
          ),
          catchError((error) =>
            of(getExpensesYesterdayAmountFailure({ error }))
          )
        )
      )
    )
  );

  readonly getExpensesWeekAmount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getExpensesWeekAmount),
      switchMap(({ userId, date }) =>
        this.expenseService.getExpensesTotalAmountForWeek(userId, date).pipe(
          map((weekAmount) => getExpensesWeekAmountSuccess({ weekAmount })),
          catchError((error) => of(getExpensesWeekAmountFailure({ error })))
        )
      )
    )
  );

  readonly getExpensesMonthAmount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getExpensesMonthAmount),
      switchMap(({ userId, date }) =>
        this.expenseService.getExpensesTotalAmountForMonth(userId, date).pipe(
          map((monthAmount) => getExpensesMonthAmountSuccess({ monthAmount })),
          catchError((error) => of(getExpensesMonthAmountFailure({ error })))
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
