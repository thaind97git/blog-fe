import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from '@/store';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

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
      <Helmet titleTemplate="%s - React Starter" defaultTitle="React Starter">
        <meta name="description" content="A React Starter application" />
      </Helmet>

      <ConnectedRouter history={history}>
        <Suspense fallback={<PageLoading show />}>
          <Layout />
          <PageLoading />
        </Suspense>
      </ConnectedRouter>

      <ToastContainer />
    </Router>
  );
};

export default ReactApp;
