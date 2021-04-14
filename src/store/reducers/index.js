import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';

import counterReducer from './counter';
import layoutReducer from './layout';
import authReducer from './auth';

import { SET_LOADING, SET_THEME } from '../actions';
import { THEME_TOGGLE } from '@/enums/theme';
import { getTheme } from '@/helpers/local-storage';

const initialState = {
  loading: 0,
  theme: JSON.parse(getTheme()) ? THEME_TOGGLE.dark : THEME_TOGGLE.light,
};

const app = (state = initialState, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload ? state.loading + 1 : state.loading - 1,
      };
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };

    default:
      return { ...state };
  }
};

const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  app,
  counter: counterReducer,
  layout: layoutReducer,
  auth: authReducer,
});

export default rootReducer;
