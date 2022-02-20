import React, { lazy, Suspense } from 'react';

const LazyGamesPage = lazy(() => import('./GamesPage'));

const GamesPage = props => (
  <Suspense fallback={null}>
    <LazyGamesPage {...props} />
  </Suspense>
);

export default GamesPage;
