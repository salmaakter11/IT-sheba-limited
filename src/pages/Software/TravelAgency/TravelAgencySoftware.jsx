import React from "react";
import { Helmet } from "react-helmet";
import TravelSoftPackege from "./TravelSoftPackege";
import SystemModule from "./SystemModule";
import TravelAgencyInfo from "./TravelAgencyInfo";
import OrderFrom from "../AccountingSoftware/OrderFrom";

const TravelAgencySoftware = () => {
    return (
        <>
            <div className="main">
            <Helmet>
                    <title>TravelAgency Software</title>
                </Helmet>
                <TravelAgencyInfo />

                <TravelSoftPackege />

                <SystemModule />

                <OrderFrom/>

            </div>
        </>
    )
}

export default TravelAgencySoftware;
