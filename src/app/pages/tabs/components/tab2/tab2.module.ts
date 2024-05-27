import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [Tab2Page, ExpenseFormComponent],
})
export class Tab2PageModule {}
