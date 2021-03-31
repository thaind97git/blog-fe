import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';
import store, { history } from '@/store';

// multi language
// import '@/i18n'

// load app SCSS styles
import '@/styles/App.scss';

// load Toast styles
import 'react-toastify/dist/ReactToastify.css';

// load app LESS styles
// import '@/styles/App.less'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
        <ToastContainer />
      </ConnectedRouter>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
