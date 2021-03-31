import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), thunk];

const enhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancers);

export default store;
