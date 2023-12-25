import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/core/store/AppState';
import { getUser } from 'src/app/core/store/login/login.selectors';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  readonly user$ = this.store.pipe(select(getUser));
  user!: User | null;

  constructor(private store: Store<AppState>) {}

  async ngOnInit(): Promise<void> {
    this.user = await firstValueFrom(this.user$);
  }
}
