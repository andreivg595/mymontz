import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingState } from 'src/app/core/store/loading/LoadingState';
import { getLoadingState } from 'src/app/core/store/loading/loading.selector';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  readonly loadingState$ = this.store.pipe(select(getLoadingState));

  constructor(private store: Store<LoadingState>) {}
}
