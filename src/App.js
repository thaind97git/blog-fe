import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from '@/store';
import { ConnectedRouter } from 'connected-react-router';

import Layout from '@/layouts';
import PageLoading from '@/components/Page-Loading';
import SEO from '@/components/SEO';

// multi language
// import '@/locales'

// load app SCSS styles
import '@/styles/App.scss';

// load app LESS styles
// import '@/styles/App.less'

const ReactApp = () => {
  return (
    <Router>
      <SEO />

      <ConnectedRouter history={history}>
        <Suspense fallback={<PageLoading show />}>
          <Layout />
          <PageLoading />
        </Suspense>
      </ConnectedRouter>
    </Router>
  );
};

export default ReactApp;
