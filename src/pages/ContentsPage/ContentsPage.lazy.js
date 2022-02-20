import React, { lazy, Suspense } from 'react';

const LazyContentsPage = lazy(() => import('./ContentsPage'));

const ContentsPage = props => (
  <Suspense fallback={null}>
    <LazyContentsPage {...props} />
  </Suspense>
);

export default ContentsPage;
