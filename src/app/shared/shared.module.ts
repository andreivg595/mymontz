import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from './components/explore-container/explore-container.component';

@NgModule({
  declarations: [ExploreContainerComponent],
  imports: [CommonModule],
  exports: [ExploreContainerComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
