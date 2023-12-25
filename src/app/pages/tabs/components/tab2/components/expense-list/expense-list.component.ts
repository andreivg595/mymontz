import { Component, Input } from '@angular/core';
import { Expense } from 'src/app/core/models/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent {
  @Input() expenses: Expense[] | null | undefined;
}
