import React, { Suspense } from 'react';

import Layout from '@/layouts';
import PageLoading from '@/components/page-loading';

const ReactApp = () => {
  return (
    <Suspense fallback={<PageLoading show />}>
      <Layout />
      <PageLoading />
    </Suspense>
  );
};

export default ReactApp;
