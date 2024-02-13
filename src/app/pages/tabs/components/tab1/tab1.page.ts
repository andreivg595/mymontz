import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/core/store/AppState';
import {
  getExpensesMonthAmount,
  getExpensesTodayAmount,
  getExpensesWeekAmount,
  getExpensesYesterdayAmount,
} from 'src/app/core/store/expense/expense.actions';
import { getUser } from 'src/app/core/store/login/login.selectors';
import {
  getMonthAmount,
  getTodayAmount,
  getWeekAmount,
  getYesterdayAmount,
} from 'src/app/core/store/expense/expense.selectors';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  readonly user$ = this.store.pipe(select(getUser));

  readonly todayAmount$ = this.store.pipe(select(getTodayAmount));

  readonly yesterdayAmount$ = this.store.pipe(select(getYesterdayAmount));

  readonly weekAmount$ = this.store.pipe(select(getWeekAmount));

  readonly monthAmount$ = this.store.pipe(select(getMonthAmount));

  user!: User | null;

  constructor(private store: Store<AppState>) {}

  async ngOnInit(): Promise<void> {
    this.user = await firstValueFrom(this.user$);
  }

  ionViewWillEnter(): void {
    this.getTodayTotalAmount();
    this.getYesterdayTotalAmount();
    this.getWeekTotalAmount();
    this.getMonthTotalAmount();
  }

  getTodayTotalAmount(): void {
    this.store.dispatch(
      getExpensesTodayAmount({
        userId: this.user?.id as number,
        date: new Date(),
      })
    );
  }

  getYesterdayTotalAmount(): void {
    const date = new Date();
    date.setDate(date.getDate() - 1);

    this.store.dispatch(
      getExpensesYesterdayAmount({
        userId: this.user?.id as number,
        date,
      })
    );
  }

  getWeekTotalAmount(): void {
    this.store.dispatch(
      getExpensesWeekAmount({
        userId: this.user?.id as number,
        date: new Date(),
      })
    );
  }

  getMonthTotalAmount(): void {
    this.store.dispatch(
      getExpensesMonthAmount({
        userId: this.user?.id as number,
        date: new Date(),
      })
    );
  }
}
