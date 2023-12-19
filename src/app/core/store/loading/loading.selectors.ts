import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingState } from './LoadingState';

export const selectLoadingState =
  createFeatureSelector<LoadingState>('loading');

export const getLoadingState = createSelector(
  selectLoadingState,
  (state) => state.show
);
