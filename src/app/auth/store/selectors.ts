import {
  createFeature,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { AppStateInterface } from '../../shered/types/appState.interface';

export const authFeatureSelector = (state: AppStateInterface) => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);
