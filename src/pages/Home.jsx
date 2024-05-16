import React from 'react';
import { Helmet } from "react-helmet";
import Slider from './homeComponent/Slider';
import Client from './homeComponent/Client';
import WhoWeAre from './homeComponent/WhoWeAre';
import Services from './homeComponent/Services';
import ClientRequirements from './homeComponent/ClientRequirements';
import FAQSection from './homeComponent/FAQSection';
import WorkPortfolio from './homeComponent/WorkPortfolio';
const Home = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Slider />

                <Client />

                <WhoWeAre />

                <Services />

                <ClientRequirements />

                <FAQSection />

                <WorkPortfolio />
            </div>

        </>
    )
}
export default Home;