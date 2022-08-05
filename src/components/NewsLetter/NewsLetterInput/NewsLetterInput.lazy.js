import React, { lazy, Suspense } from 'react';

const LazyNewsLetterInput = lazy(() => import('./NewsLetterInput'));

const NewsLetterInput = props => (
  <Suspense fallback={null}>
    <LazyNewsLetterInput {...props} />
  </Suspense>
);

export default NewsLetterInput;
