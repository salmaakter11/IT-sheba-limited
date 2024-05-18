import React, { Suspense } from 'react';
import { Helmet } from "react-helmet";

const CompanyProfileAbout = React.lazy(() => import('./CompanyProfileAbout'));

const  CompanyProfileMembership = React.lazy(() => import('./CompanyProfileMembership'));

const CompanyProfileServices = React.lazy(() => import('./CompanyProfileServices'));

const MessegeFounder = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>Company Profile</title>
                </Helmet>

                
                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <CompanyProfileAbout />
                </Suspense>


                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <CompanyProfileMembership />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <CompanyProfileServices />
                </Suspense>
            </div>
        </>

    );
};

export default MessegeFounder;