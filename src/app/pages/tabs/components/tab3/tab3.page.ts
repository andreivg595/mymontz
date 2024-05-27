import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/core/store/AppState';
import {
  fetchExpenses,
  purgeExpenses,
} from 'src/app/core/store/expense/expense.actions';
import { getExpenses } from 'src/app/core/store/expense/expense.selectors';
import { getUser } from 'src/app/core/store/login/login.selectors';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  readonly user$ = this.store.pipe(select(getUser));

  readonly expenses$ = this.store.pipe(select(getExpenses));

  usr: User | null | undefined;

  form: FormGroup | undefined;

  date: any;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
    this.usr = await firstValueFrom(this.user$);
  }

  ionViewWillEnter(): void {
    this.store.dispatch(purgeExpenses());
  }

  private initForm() {
    this.form = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup): void {
    const startDate = new Date(form.get('startDate')?.value);
    const endDate = new Date(form.get('endDate')?.value);
    this.store.dispatch(
      fetchExpenses({
        userId: this.usr?.id as number,
        startDate,
        endDate,
      })
    );
  }
}
