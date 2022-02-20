import React, { lazy, Suspense } from 'react';

const LazyArticlesGrid = lazy(() => import('./ArticlesGrid'));

const ArticlesGrid = props => (
  <Suspense fallback={null}>
    <LazyArticlesGrid {...props} />
  </Suspense>
);

export default ArticlesGrid;
