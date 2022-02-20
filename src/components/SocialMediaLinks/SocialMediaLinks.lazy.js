import React, { lazy, Suspense } from 'react';

const LazySocialMediaLinks = lazy(() => import('./SocialMediaLinks'));

const SocialMediaLinks = props => (
  <Suspense fallback={null}>
    <LazySocialMediaLinks {...props} />
  </Suspense>
);

export default SocialMediaLinks;
