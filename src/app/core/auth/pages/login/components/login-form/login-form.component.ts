import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Input() form: FormGroup | undefined;
  @Output() formEvent = new EventEmitter<FormGroup>();

  get usernameControl(): FormControl {
    return this.form?.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form?.get('password') as FormControl;
  }

  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigateByUrl('/register');
  }
}
