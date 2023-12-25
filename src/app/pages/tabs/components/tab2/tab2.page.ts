import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/core/store/AppState';
import { fetchExpenseCategories } from 'src/app/core/store/expense-category/expense-category.actions';
import { getExpenseCategories } from 'src/app/core/store/expense-category/expense-category.selectors';
import {
  addExpense,
  fetchExpenses,
} from 'src/app/core/store/expense/expense.actions';
import { getExpenses } from 'src/app/core/store/expense/expense.selectors';
import { getUser } from 'src/app/core/store/login/login.selectors';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  readonly expenseCategories$ = this.store.pipe(select(getExpenseCategories));

  readonly expenses$ = this.store.pipe(select(getExpenses));

  readonly user$ = this.store.pipe(select(getUser));

  form: FormGroup | undefined;

  dateTime: Date | undefined;

  usr: User | null | undefined;

  date: Date | undefined;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  async ngOnInit(): Promise<void> {
    this.usr = await firstValueFrom(this.user$);
    this.store.dispatch(fetchExpenseCategories());
    this.store.dispatch(
      fetchExpenses({
        userId: this.usr?.id as number,
        startDate: new Date(),
        endDate: new Date(),
      })
    );
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      expenseCategory: ['', Validators.required],
      amount: ['', Validators.required],
      user: [''],
      date: [''],
      note: [''],
    });
  }

  modelChangeFn(selectedDate: Date): void {
    const date = selectedDate as unknown as string;
    const d = date.split('-');
    const year = d[0];
    const month = d[1];
    const day = d[2];
    this.date = new Date(+year, +month - 1, +day.split('T')[0]);
    this.getExpenses();
  }

  private getExpenses() {
    this.store.dispatch(
      fetchExpenses({
        userId: this.usr?.id as number,
        startDate: this.date as Date,
        endDate: this.date as Date,
      })
    );
  }

  onSubmit(form: FormGroup): void {
    if (form?.valid) {
      this.dateTime !== undefined
        ? form?.controls['date'].setValue(this.date)
        : form?.controls['date'].setValue(new Date());
      form?.controls['user'].setValue(this.usr);
      form?.controls['expenseCategory'].setValue({
        id: form.value.expenseCategory,
      });

      this.store.dispatch(addExpense({ expense: form.value }));
    }
  }
}
