import React, { lazy, Suspense } from 'react';

const LazyGamesGrid = lazy(() => import('./GamesGrid'));

const GamesGrid = props => (
  <Suspense fallback={null}>
    <LazyGamesGrid {...props} />
  </Suspense>
);

export default GamesGrid;
