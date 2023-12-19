import { createReducer, on } from '@ngrx/store';
import { LoadingState } from './LoadingState';
import { hide, show } from './loading.actions';
import { AppInitialState } from '../AppInitialState';

const initalState: LoadingState = AppInitialState.loading;

export const loadingReducer = createReducer(
  initalState,
  on(show, (state) => ({ ...state, show: true })),
  on(hide, (state) => ({ ...state, show: false }))
);
