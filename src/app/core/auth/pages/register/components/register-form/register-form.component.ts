import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Input() form: FormGroup | undefined;
  @Output() formEvent = new EventEmitter<FormGroup>();

  get emailControl(): FormControl {
    return this.form?.get('email') as FormControl;
  }

  get usernameControl(): FormControl {
    return this.form?.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form?.get('password') as FormControl;
  }
}
