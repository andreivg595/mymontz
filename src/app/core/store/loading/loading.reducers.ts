import { Action, createReducer, on } from '@ngrx/store';
import { LoadingState } from './LoadingState';
import { hide, show } from './loading.actions';

const initalState: LoadingState = {
  show: false,
};

export const loadingReducer = createReducer(
  initalState,
  on(show, (state) => ({ ...state, show: true })),
  on(hide, (state) => ({ ...state, show: false }))
);
