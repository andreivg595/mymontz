import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Expense } from 'src/app/core/models/expense.model';
import { Type } from 'src/app/core/models/type.enum';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent {
  @Input() expenses: Expense[] | null | undefined;
  @Input() isEditing = false;
  @Output() readonly updateEvent = new EventEmitter<Expense>();
  @Output() readonly deleteEvent = new EventEmitter<Expense>();

  readonly CategoryType = Type;

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

  getIcon(type: string): string {
    switch (type) {
      case this.CategoryType.HOUSE:
        return 'home-outline';
      case this.CategoryType.TRANSPORT:
        return 'bus-outline';
      case this.CategoryType.SUPERMARKET:
        return 'cart-outline';
      case this.CategoryType.SHOPPING:
        return 'bag-outline';
      case this.CategoryType.RESTAURANTS:
        return 'restaurant-outline';
      case this.CategoryType.TRAVEL:
        return 'airplane-outline';
      case this.CategoryType.HEALTH:
        return 'medkit-outline';
      case this.CategoryType.ENTRETAINMENT:
        return 'game-controller-outline';
      case this.CategoryType.EDUCATION:
        return 'book-outline';
      case this.CategoryType.PERSONAL_CARE:
        return 'medkit-outline';
      case this.CategoryType.DEBTS:
        return 'cash-outline';
    }
    return 'help-circle-outline';
  }

  getTotal(): number {
    return (
      this.expenses?.reduce((total, expense) => total + expense.amount, 0) || 0
    );
  }
}
