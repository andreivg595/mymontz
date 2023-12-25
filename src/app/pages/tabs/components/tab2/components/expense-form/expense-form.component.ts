import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExpenseCategory } from 'src/app/core/models/expense-category';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent {
  @Input() form: FormGroup | undefined;
  @Input() expenseCategories: ExpenseCategory[] | null | undefined;
  @Output() formEvent = new EventEmitter<FormGroup>();

  get categoryControl(): FormControl {
    return this.form?.get('expenseCategory') as FormControl;
  }

  get amountControl(): FormControl {
    return this.form?.get('amount') as FormControl;
  }

  get noteControl(): FormControl {
    return this.form?.get('note') as FormControl;
  }
}
