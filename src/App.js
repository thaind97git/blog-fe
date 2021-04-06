import React, { Suspense } from 'react';

import Layout from '@/app/layouts';
import PageLoading from '@/app/components/Page-Loading';

const ReactApp = () => {
  return (
    <Suspense fallback={<PageLoading show />}>
      <Layout />
      <PageLoading />
    </Suspense>
  );
};

export default ReactApp;
