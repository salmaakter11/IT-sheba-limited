import React from "react";
import { Helmet } from "react-helmet";
import OrderFrom from "../../Software/AccountingSoftware/OrderFrom";
import WhatTelemarketing from "./WhatTelemarketing";
import Benefits from "./Benefits";
import Costs from "./Costs";
import BestTelemarketing from "./BestTelemarketing";
import TelemarketingPackege from "./TelemarketingPackege";
const Telemarketing = () => {
    return (
        <>

            <div className="main">
            <Helmet>
          <title>Tele Marketing</title>
        </Helmet>
                <WhatTelemarketing />

                <Benefits />

                <Costs />

                <BestTelemarketing />

                <TelemarketingPackege />

                <OrderFrom />
            </div>

        </>
    )
}
export default Telemarketing;