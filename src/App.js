import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store, { history } from '@/store';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';

import Layout from '@/app/layouts';
import PageLoading from '@/app/components/Page-Loading';

// multi language
// import '@/locales'

// load app SCSS styles
import '@/styles/App.scss';

// load Toast styles
import 'react-toastify/dist/ReactToastify.css';

// load app LESS styles
// import '@/styles/App.less'

const ReactApp = () => {
  return (
    <Router>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<PageLoading show />}>
            <Layout />
            <PageLoading />
          </Suspense>
          <ToastContainer />
        </ConnectedRouter>
      </Provider>
    </Router>
  );
};

export default ReactApp;
