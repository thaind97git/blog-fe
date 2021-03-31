import { createSelector } from 'reselect';

export const getIsAuthenticated = createSelector(
  state => state.auth,
  auth => auth.isAuthenticated,
);

export const getCurrentUser = createSelector(
  state => state.auth,
  auth => auth.currentUser,
);
