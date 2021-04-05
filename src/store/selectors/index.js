import { createSelector } from 'reselect';

export const getLoading = createSelector(
  state => state.app,
  app => app.loading,
);
