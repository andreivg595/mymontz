import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportFormComponent } from './components/report-form/report-form.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [Tab3Page, ReportFormComponent],
})
export class Tab3PageModule {}
