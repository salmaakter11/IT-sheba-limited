import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
const  DigitalMarketingPackege= React.lazy(() => import('./DigitalMarketingPackege'));
const  GoogleAds= React.lazy(() => import('./GoogleAds'));
const DigitalMarketingInfo = React.lazy(() => import('./DigitalMarketingInfo'));
const DigitalMarketing = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>Digital Marketing</title>
                </Helmet>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <DigitalMarketingInfo />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <GoogleAds />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <DigitalMarketingPackege />
                </Suspense>
            </div>

        </>
    )
}
export default DigitalMarketing;