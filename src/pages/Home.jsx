import React, { Suspense } from 'react';
import { Helmet } from "react-helmet";
const Slider = React.lazy(() => import('./homeComponent/Slider'));
const Client = React.lazy(() => import('./homeComponent/Client'));
const WhoWeAre = React.lazy(() => import('./homeComponent/WhoWeAre'));
const Services = React.lazy(() => import('./homeComponent/Services'));
const ClientRequirements = React.lazy(() => import('./homeComponent/ClientRequirements'));
const FAQSection = React.lazy(() => import('./homeComponent/FAQSection'));
const WorkPortfolio = React.lazy(() => import('./homeComponent/WorkPortfolio'));
const Home = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>Home – All your IT support in one place</title>
                </Helmet>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <Slider />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <Client />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <WhoWeAre />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <Services />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    < ClientRequirements />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <FAQSection />
                </Suspense>

                <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                    <WorkPortfolio />
                </Suspense>

            </div>

        </>
    )
}
export default Home;