export const SET_LOADING = 'SET_LOADING';
export const SET_THEME = 'SET_THEME';

export const setLoading = isLoading => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setTheme = theme => ({
  type: SET_THEME,
  payload: theme,
});
