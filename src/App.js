import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from '@/store';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import Layout from '@/layouts';
import PageLoading from '@/components/Page-Loading';

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
      <Helmet titleTemplate="%s - aldenn" defaultTitle="aldenn">
        <meta name="og:url" content="https://aldenn.vercel.app" />
        <meta name="og:title" content="aldenn resume" />
        <meta
          name="og:description"
          content="Tech blog designed by Alden Nguyen"
        />
        <meta
          name="og:image"
          content="https://avatars2.githubusercontent.com/u/42630357?s=460&v=4"
        />
        <meta name="og:type" content="website" />
        {/* <meta name="fb:app_id" content={facebook.appId} /> */}
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
