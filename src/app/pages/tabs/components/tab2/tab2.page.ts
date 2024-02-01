import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Subscription, firstValueFrom } from 'rxjs';
import { Expense } from 'src/app/core/models/expense.model';
import { User } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/core/store/AppState';
import { fetchExpenseCategories } from 'src/app/core/store/expense-category/expense-category.actions';
import { getExpenseCategories } from 'src/app/core/store/expense-category/expense-category.selectors';
import {
  addExpense,
  deleteExpense,
  fetchExpenses,
  updateExpense,
} from 'src/app/core/store/expense/expense.actions';
import {
  getExpenses,
  getExpenseState,
} from 'src/app/core/store/expense/expense.selectors';
import { hide, show } from 'src/app/core/store/loading/loading.actions';
import { getUser } from 'src/app/core/store/login/login.selectors';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnDestroy {
  readonly expenseCategories$ = this.store.pipe(select(getExpenseCategories));

  readonly expenses$ = this.store.pipe(select(getExpenses));

  readonly expensesState$ = this.store.pipe(select(getExpenseState));

  readonly user$ = this.store.pipe(select(getUser));

  form: FormGroup | undefined;

  dateTime: Date | undefined;

  usr: User | null | undefined;

  date: Date | undefined;

  subscription: Subscription | undefined;

  isOpen = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private toastController: ToastController
  ) {}

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
    this.checkExpenses();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: [null],
      category: ['', Validators.required],
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

  private checkExpenses(): void {
    this.subscription = this.expensesState$.subscribe((state) => {
      if (state.isDeleting || state.isUpdating || state.isCreating) {
        this.store.dispatch(show());
      } else {
        this.store.dispatch(hide());
      }

      if (state.isDeleted) {
        this.toastController
          .create({
            message: 'Deleted successfully',
            duration: 3000,
            position: 'bottom',
          })
          .then((toast) => toast.present());
      }

      if (state.isUpdated) {
        this.isOpen = false;
        this.toastController
          .create({
            message: 'Updated successfully',
            duration: 3000,
            color: 'tertiary',
            position: 'bottom',
          })
          .then((toast) => toast.present());
      }

      if (state.error) {
        this.toastController
          .create({
            message: state.error.message,
            duration: 3000,
            position: 'bottom',
          })
          .then((toast) => toast.present());
      }
    });
  }

  onSubmit(form: FormGroup): void {
    if (form?.valid) {
      if (form.controls['id'].value) {
        form?.controls['date'].setValue(new Date());
        form?.controls['category'].setValue({
          id: form.value.category,
        });
        this.store.dispatch(updateExpense({ expense: form.value }));
      } else {
        this.dateTime !== undefined
          ? form?.controls['date'].setValue(this.date)
          : form?.controls['date'].setValue(new Date());
        form?.controls['user'].setValue(this.usr);
        form?.controls['category'].setValue({
          id: form.value.category,
        });
        this.store.dispatch(addExpense({ expense: form.value }));
      }
    }
  }

  onUpdate(expense: Expense): void {
    this.form?.patchValue(expense);
    this.isOpen = true;
  }

  onDelete(expense: Expense): void {
    this.store.dispatch(deleteExpense({ id: expense.id }));
  }

  onDidDismiss(): void {
    this.form?.reset();
    this.isOpen = false;
  }
}
