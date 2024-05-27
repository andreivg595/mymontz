import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from './components/explore-container/explore-container.component';
import { LoadingComponent } from './components/loading/loading.component';
import { IonicModule } from '@ionic/angular';
import { ExpenseListComponent } from '../pages/tabs/components/tab2/components/expense-list/expense-list.component';

@NgModule({
  declarations: [
    ExploreContainerComponent,
    LoadingComponent,
    ExpenseListComponent,
  ],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [ExploreContainerComponent, LoadingComponent, ExpenseListComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
