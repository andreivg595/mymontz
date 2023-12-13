import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from './components/explore-container/explore-container.component';
import { LoadingComponent } from './components/loading/loading.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ExploreContainerComponent, LoadingComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [ExploreContainerComponent, LoadingComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
