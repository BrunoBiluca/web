import React, { lazy, Suspense } from 'react';

const LazyContentCardHorizontal = lazy(() => import('./ContentCardHorizontal'));

const ContentCardHorizontal = props => (
  <Suspense fallback={null}>
    <LazyContentCardHorizontal {...props} />
  </Suspense>
);

export default ContentCardHorizontal;
