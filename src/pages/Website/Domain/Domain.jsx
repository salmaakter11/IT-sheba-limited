import React, { Suspense } from 'react';
import { Helmet } from "react-helmet";
const DomainBD = React.lazy(() => import('./DomainBD'));
const DomainPackage = React.lazy(() => import('./DomainPackage'));

const Domain = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>Domain</title>
                </Helmet>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <DomainBD />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <DomainPackage />
                </Suspense>

            </div>

        </>
    )
}

export default Domain;
