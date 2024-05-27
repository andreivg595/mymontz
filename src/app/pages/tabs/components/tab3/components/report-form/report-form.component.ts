import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
})
export class ReportFormComponent {
  @Input() form: FormGroup | undefined;
  @Output() formEvent = new EventEmitter<FormGroup>();

  date: any;

  get startDateControl(): FormControl {
    return this.form?.get('startDate') as FormControl;
  }

  get endDateControl(): FormControl {
    return this.form?.get('endDate') as FormControl;
  }

  updateStartDate(event: any): void {
    this.startDateControl.setValue(event.detail.value);
  }

  updateEndDate(event: any): void {
    this.endDateControl.setValue(event.detail.value);
  }
}
