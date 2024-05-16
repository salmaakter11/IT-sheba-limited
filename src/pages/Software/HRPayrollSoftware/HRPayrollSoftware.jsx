import React from "react";
import { Helmet } from "react-helmet";
import HRSoftwareBanner from "./HRSoftwareBanner";
import WhatIsAccounting from "./WhatIsAccounting";
import HRSoftwarePackage from "./HRSoftwarePackage";
import OrderFrom from "../AccountingSoftware/OrderFrom";

const HRPayrollSoftware = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>HR & Payroll Software</title>
                </Helmet>
                
                <HRSoftwareBanner />

                <WhatIsAccounting />

                <HRSoftwarePackage />

                <OrderFrom />

            </div>

        </>
    )
}
export default HRPayrollSoftware;