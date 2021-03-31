import { createSelector } from 'reselect';

export const getLoading = createSelector(
  state => state.layout,
  layout => layout.loading,
);
