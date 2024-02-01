import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Expense } from 'src/app/core/models/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent {
  @Input() expenses: Expense[] | null | undefined;
  @Output() readonly updateEvent = new EventEmitter<Expense>();
  @Output() readonly deleteEvent = new EventEmitter<Expense>();

  constructor(private alertController: AlertController) {}

  deleteExpense(expense: Expense): void {
    this.alertController
      .create({
        header: 'Expense will be deleted',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
          },
          {
            text: 'Ok',
            handler: () => {
              this.deleteEvent.emit(expense);
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }
}
