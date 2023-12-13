import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/core/store/AppState';
import { hide, show } from 'src/app/core/store/loading/loading.actions';
import { purge, register } from 'src/app/core/store/register/register.actions';
import { getRegister } from 'src/app/core/store/register/register.selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  register$ = this.store.pipe(select(getRegister));
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
    this.checkRegister();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.store.dispatch(purge());
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister(form: FormGroup): void {
    const { email, username, password } = form.value;
    this.store.dispatch(register({ email, username, password }));
  }

  private checkRegister(): void {
    this.subscription = this.register$.subscribe((state) => {
      if (state.isRegistering) {
        this.store.dispatch(show());
      } else {
        this.store.dispatch(hide());
      }

      if (state.isRegistered) {
        this.router.navigate(['/login']);
        this.toastController
          .create({
            message: 'Registered successfully',
            duration: 3000,
            color: 'tertiary',
            position: 'bottom',
          })
          .then((toast) => toast.present());
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
