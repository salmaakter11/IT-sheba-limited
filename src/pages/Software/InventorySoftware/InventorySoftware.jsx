import React from "react";
import { Helmet } from "react-helmet";
import SoftwareDemo from "./SoftwareDemo";
import InventoryInfo from "./InventoryInfo";

import SalesParty from "./SalesParty";
import SoftwareSignificance from "./SoftwareSignificance";
import OrderFrom from "../AccountingSoftware/OrderFrom";
const InventorySoftware = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>Inventory Software</title>
                </Helmet>
                <InventoryInfo />
                <SoftwareSignificance />

                <SalesParty />

                <SoftwareDemo />

                <OrderFrom />

            </div>

        </>
    )
}
export default InventorySoftware;