import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

const WhatTelemarketing = React.lazy(() => import("./WhatTelemarketing"));
const Benefits = React.lazy(() => import("./Benefits"));
const Costs = React.lazy(() => import("./Costs"));
const BestTelemarketing = React.lazy(() => import("./BestTelemarketing"));
const TelemarketingPackege = React.lazy(() => import("./TelemarketingPackege"));
const OrderFrom = React.lazy(() => import("../../Software/AccountingSoftware/OrderFrom"));



const Telemarketing = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>Tele Marketing</title>
                </Helmet>

               
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <WhatTelemarketing />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <Costs />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <Benefits />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <Costs />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <BestTelemarketing />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <TelemarketingPackege />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <OrderFrom />
                </Suspense>
            </div>
        </>
    );
}

export default Telemarketing;
