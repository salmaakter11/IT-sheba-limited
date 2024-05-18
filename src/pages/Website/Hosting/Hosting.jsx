import React, { Suspense } from 'react';
import { Helmet } from "react-helmet";
const HostingBd = React.lazy(() => import('./HostingBd'));
const HostingFeatures = React.lazy(() => import('./HostingFeatures'));
const HostingpriceFrom = React.lazy(() => import('./HostingpriceFrom'));
const HostingComponent = () => {
  return (
    <>
      <div className="main">
        <Helmet>
          <title>Hosting</title>
        </Helmet>


        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <HostingBd />
        </Suspense>

        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <HostingFeatures />
        </Suspense>

        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
          <HostingpriceFrom />
        </Suspense>

      </div>

    </>
  )
}
export default HostingComponent;