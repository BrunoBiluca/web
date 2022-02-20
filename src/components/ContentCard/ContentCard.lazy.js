import React, { lazy, Suspense } from 'react';

const LazyContentCard = lazy(() => import('./ContentCard'));

const ContentCard = props => (
  <Suspense fallback={null}>
    <LazyContentCard {...props} />
  </Suspense>
);

export default ContentCard;
