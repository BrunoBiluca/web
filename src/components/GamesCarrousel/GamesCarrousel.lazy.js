import React, { lazy, Suspense } from 'react';

const LazyGamesCarrousel = lazy(() => import('./GamesCarrousel'));

const GamesCarrousel = props => (
  <Suspense fallback={null}>
    <LazyGamesCarrousel {...props} />
  </Suspense>
);

export default GamesCarrousel;
