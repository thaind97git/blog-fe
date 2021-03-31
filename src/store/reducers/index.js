import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';

import counterReducer from './counter';
import layoutReducer from './layout';
import authReducer from './auth';

import { SET_LOADING } from '../actions';

const initialState = {
  loading: 0,
};

const app = (state = initialState, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload ? state.loading + 1 : state.loading - 1,
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
