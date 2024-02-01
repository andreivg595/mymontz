import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExpenseCategory } from 'src/app/core/models/expense-category';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent implements OnInit {
  @Input() form: FormGroup | undefined;
  @Input() categories: ExpenseCategory[] | null | undefined;
  @Output() formEvent = new EventEmitter<FormGroup>();

  ngOnInit(): void {
    this.categoryControl.setValue(this.categoryControl.value?.id);
  }

  get categoryControl(): FormControl {
    return this.form?.get('category') as FormControl;
  }

  get amountControl(): FormControl {
    return this.form?.get('amount') as FormControl;
  }

  get noteControl(): FormControl {
    return this.form?.get('note') as FormControl;
  }
}
