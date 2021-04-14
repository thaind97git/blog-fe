import { createSelector } from 'reselect';

export const getLoading = createSelector(
  state => state.app,
  app => app.loading,
);

export const getTheme = createSelector(
  state => state.app,
  app => app.theme,
);
