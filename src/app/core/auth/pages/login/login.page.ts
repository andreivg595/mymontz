import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/core/store/AppState';
import { hide, show } from 'src/app/core/store/loading/loading.actions';
import { login } from 'src/app/core/store/login/login.actions';
import { getLogin } from 'src/app/core/store/login/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  readonly login$ = this.store.pipe(select(getLogin));
  form: FormGroup | undefined;
  subscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.initForm();
    this.checkLogin();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private initForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(form: FormGroup): void {
    const { username, password } = form.value;
    this.store.dispatch(login({ username, password }));
  }

  private checkLogin() {
    this.subscription = this.login$.subscribe((state) => {
      if (state.isLoggingIn) {
        this.store.dispatch(show());
      } else {
        this.store.dispatch(hide());
      }

      if (state.isLoggedIn) {
        this.router.navigate(['/']);
      }

      if (state.error) {
        this.toastController
          .create({
            message: state.error.error.message,
            duration: 3000,
            position: 'bottom',
          })
          .then((toast) => toast.present());
      }
    });
  }
}
