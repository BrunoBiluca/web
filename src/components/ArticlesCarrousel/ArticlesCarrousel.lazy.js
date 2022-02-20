import React, { lazy, Suspense } from 'react';

const LazyArticlesCarrousel = lazy(() => import('./ArticlesCarrousel'));

const ArticlesCarrousel = props => (
  <Suspense fallback={null}>
    <LazyArticlesCarrousel {...props} />
  </Suspense>
);

export default ArticlesCarrousel;
