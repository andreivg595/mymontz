import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchExpenseCategories,
  fetchExpenseCategoriesFailure,
  fetchExpenseCategoriesSuccess,
} from './expense-category.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ExpenseCategoryService } from '../../services/expense-category.service';

@Injectable()
export class ExpenseCategoryEffects {
  constructor(
    private actions$: Actions,
    private expenseCategoryService: ExpenseCategoryService
  ) {}

  fetchExpenseCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchExpenseCategories),
      switchMap(() =>
        this.expenseCategoryService.getExpenseCategories().pipe(
          map((expenseCategories) =>
            fetchExpenseCategoriesSuccess({ expenseCategories })
          ),
          catchError((error) => of(fetchExpenseCategoriesFailure({ error })))
        )
      )
    )
  );
}
